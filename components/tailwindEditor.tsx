"use client";

import { EditorContent, EditorRoot } from "novel";
import { useState } from "react";
import { JSONContent } from "novel"; // Adjust this import based on your project setup

const TailwindEditor = () => {
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

export default TailwindEditor;
