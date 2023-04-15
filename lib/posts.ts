import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import { remarkCodeBlocksShiki } from '@kentcdodds/md-temp';

import { Frontmatter } from '@/interfaces/blog';
import type * as H from 'hast';

const postsDirectory = path.join(process.cwd(), 'posts');

function trimCodeBlocks() {
  return async function transformer(tree: H.Root) {
    const { visit } = await import('unist-util-visit');
    visit(tree, 'element', (preNode: H.Element) => {
      if (preNode.tagName !== 'pre' || !preNode.children.length) {
        return;
      }
      const codeNode = preNode.children[0];
      if (
        !codeNode ||
        codeNode.type !== 'element' ||
        codeNode.tagName !== 'code'
      ) {
        return;
      }
      const [codeStringNode] = codeNode.children;
      if (!codeStringNode) return;

      if (codeStringNode.type !== 'text') {
        console.warn(
          `trimCodeBlocks: Unexpected: codeStringNode type is not "text": ${codeStringNode.type}`
        );
        return;
      }
      codeStringNode.value = codeStringNode.value.trim();
    });
  };
}

function removePreContainerDivs() {
  return async function preContainerDivsTransformer(tree: H.Root) {
    const { visit } = await import('unist-util-visit');
    visit(
      tree,
      { type: 'element', tagName: 'pre' },
      function visitor(node, index, parent) {
        if (parent?.type !== 'element') return;
        if (parent.tagName !== 'div') return;
        if (parent.children.length !== 1 && index === 0) return;
        Object.assign(parent, node);
      }
    );
  };
}

export async function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export async function getBlogPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Frontmatter),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, 'utf8');

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        trimCodeBlocks,
        remarkCodeBlocksShiki,
        removePreContainerDivs,
      ];

      return options;
    },
  });

  return {
    slug,
    frontmatter,
    code,
  };
}
