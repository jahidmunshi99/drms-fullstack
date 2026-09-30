"use client";

import Card from "@/components/common/Card";
import { ClipboardList, MessageSquare, RefreshCw, Truck } from "lucide-react";

const noteIcons = {
  internal: ClipboardList,
  instruction: MessageSquare,
  revision: RefreshCw,
  delivery: Truck,
};

const noteColors = {
  internal: "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",

  instruction:
    "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",

  revision:
    "bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",

  delivery:
    "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400",
};

const noteTitles = {
  internal: "Internal Note",
  instruction: "Client Instruction",
  revision: "Revision Note",
  delivery: "Delivery Note",
};

const notes = [
  {
    id: 1,
    type: "instruction",
    message:
      "Please follow Amazon KDP formatting guidelines. Use Garamond font and keep all chapter titles centered.",
    createdAt: "14 Jul 2026",
    author: "John Smith",
  },
  {
    id: 2,
    type: "internal",
    message:
      "Cover designer will deliver the final cover tomorrow. Formatting can continue in parallel.",
    createdAt: "15 Jul 2026",
    author: "Jahid Munshi",
  },
  {
    id: 3,
    type: "revision",
    message:
      "Client requested a clickable Table of Contents and updated page numbering.",
    createdAt: "18 Jul 2026",
    author: "Support Team",
  },
  {
    id: 4,
    type: "delivery",
    message: "Final PDF and EPUB delivered successfully via Fiverr.",
    createdAt: "20 Jul 2026",
    author: "Jahid Munshi",
  },
];

export default function OrderNotes({ notes = [] }) {
  return (
    <Card
      title="Order Notes"
      description="Important notes and instructions for this order."
    >
      {notes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 py-10 text-center dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">
            No notes available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {notes.map((note, index) => {
            const Icon = noteIcons[note.type] || ClipboardList;
            const color = noteColors[note.type] || noteColors.internal;
            const title = noteTitles[note.type] || "Note";

            return (
              <div
                key={note.id || index}
                className="rounded-xl border border-slate-200 p-5 dark:border-slate-800"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${color}`}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {title}
                      </h4>

                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {note.createdAt}
                      </span>
                    </div>

                    <p className="mt-3 whitespace-pre-line leading-7 text-slate-600 dark:text-slate-300">
                      {note.message}
                    </p>

                    {note.author && (
                      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        Added by{" "}
                        <span className="font-medium">{note.author}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
