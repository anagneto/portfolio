"use client";

import { useState } from "react";
import { ChevronRight, Folder, FolderOpen, FileText } from "lucide-react";

/* Interactive folder tree for the "One team. Many clients." slide. Pink
   directories are clickable: clicking one expands its children vertically
   (grid-rows 0fr->1fr, the same collapse trick as the Accordion). Plain files
   and leaf directories (the empty output folders) are static rows. Default
   state shows the top level open and the deeper branches collapsed, so the
   slide opens tidy and the presenter expands one branch at a time. */
export type FsNode = {
  name: string;
  comment?: string;
  dir?: boolean; // render as a (pink) directory even with no children
  defaultOpen?: boolean;
  children?: FsNode[];
};

const INDENT = 22; // px per depth level

function TreeNode({ node, depth }: { node: FsNode; depth: number }) {
  const expandable = !!node.children?.length;
  const [open, setOpen] = useState(!!node.defaultOpen);
  const pad = { paddingLeft: depth * INDENT + 12 };

  if (!expandable) {
    return (
      <div className={`ft-row ft-static${node.dir ? " ft-dir" : ""}`} style={pad}>
        <span className="ft-twist" />
        {node.dir ? (
          <Folder className="ft-icon" size={15} />
        ) : (
          <FileText className="ft-icon ft-file" size={14} />
        )}
        <span className="ft-name">{node.name}</span>
        {node.comment && <span className="ft-comment"># {node.comment}</span>}
      </div>
    );
  }

  return (
    <div className="ft-group">
      <button
        type="button"
        className={`ft-row ft-dir ft-toggle${open ? " open" : ""}`}
        style={pad}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="ft-twist">
          <ChevronRight size={14} strokeWidth={2.5} />
        </span>
        {open ? (
          <FolderOpen className="ft-icon" size={15} />
        ) : (
          <Folder className="ft-icon" size={15} />
        )}
        <span className="ft-name">{node.name}</span>
        {node.comment && <span className="ft-comment"># {node.comment}</span>}
      </button>
      <div className={`ft-children${open ? " open" : ""}`}>
        <div className="ft-children-inner">
          <span
            className="ft-guide"
            style={{ left: depth * INDENT + 12 + 6 }}
            aria-hidden
          />
          {node.children!.map((c, i) => (
            <TreeNode key={i} node={c} depth={depth + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function FileTree({ root }: { root: FsNode }) {
  return (
    <div className="ft">
      <TreeNode node={root} depth={0} />
    </div>
  );
}
