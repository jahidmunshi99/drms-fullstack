"use client";

import Card from "@/components/common/Card";
import { BookOpen, Download, FileText, FolderOpen, Image } from "lucide-react";

const iconMap = {
  manuscript: FileText,
  cover: Image,
  final: BookOpen,
  reference: FolderOpen,
};

const attachments = [
  {
    id: 1,
    name: "Book-Manuscript.docx",
    type: "manuscript",
    size: "3.2 MB",
    uploadedAt: "14 Jul 2026",
  },
  {
    id: 2,
    name: "Paperback-Cover.psd",
    type: "cover",
    size: "42 MB",
    uploadedAt: "15 Jul 2026",
  },
  {
    id: 3,
    name: "Final-Print.pdf",
    type: "final",
    size: "18 MB",
    uploadedAt: "20 Jul 2026",
  },
  {
    id: 4,
    name: "Reference-Images.zip",
    type: "reference",
    size: "11 MB",
    uploadedAt: "14 Jul 2026",
  },
];

export default function OrderAttachments({ attachments = [] }) {
  return (
    <Card title="Attachments" description="Files related to this order.">
      {attachments.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 py-10 text-center dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">
            No attachments available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {attachments.map((file, index) => {
            const Icon = iconMap[file.type] || FileText;

            return (
              <div
                key={file.id || index}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-500 dark:border-slate-800 dark:hover:border-blue-500 md:flex-row md:items-center md:justify-between"
              >
                {/* Left */}

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {file.name}
                    </h4>

                    <div className="mt-1 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <span className="capitalize">{file.type}</span>

                      <span>{file.size}</span>

                      <span>{file.uploadedAt}</span>
                    </div>
                  </div>
                </div>

                {/* Right */}

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
