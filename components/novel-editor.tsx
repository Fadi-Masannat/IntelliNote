"use-client";
import { Range } from "@tiptap/core";

import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorContent,
  EditorInstance,
  EditorRoot,
} from "novel";

export default () => (
  <>
    <EditorRoot>
      <EditorContent>
        <EditorCommand>
          <EditorCommandItem
            onCommand={function ({
              editor,
              range,
            }: {
              editor: EditorInstance;
              range: Range;
            }): void {
              throw new Error("Function not implemented.");
            }}
          />
          <EditorCommandItem
            onCommand={function ({
              editor,
              range,
            }: {
              editor: EditorInstance;
              range: Range;
            }): void {
              throw new Error("Function not implemented.");
            }}
          />
          <EditorCommandItem
            onCommand={function ({
              editor,
              range,
            }: {
              editor: EditorInstance;
              range: Range;
            }): void {
              throw new Error("Function not implemented.");
            }}
          />
        </EditorCommand>
        <EditorBubble>
          <EditorBubbleItem children={undefined} />
          <EditorBubbleItem children={undefined} />
          <EditorBubbleItem children={undefined} />
        </EditorBubble>
      </EditorContent>
    </EditorRoot>
  </>
);
