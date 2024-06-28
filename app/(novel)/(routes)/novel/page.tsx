"use client";

import TailwindEditor from "@/components/tailwindEditor";
import Head from "next/head";
import { EditorContent, EditorRoot, JSONContent } from "novel";
import { useState } from "react";

const DocumentIdPage = () => {
  if (document === undefined) {
    return <div>Undefined</div>;
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  const [content, setContent] = useState<JSONContent | null>(null);

  return (
    <EditorRoot>
      <EditorContent
        initialContent={content ?? undefined} // Convert null to undefined
        onUpdate={({ editor }) => {
          const json: JSONContent = editor.getJSON();
          setContent(json);
        }}
      />
    </EditorRoot>
  );
};

export default DocumentIdPage;
