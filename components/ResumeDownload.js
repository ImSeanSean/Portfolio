"use client";

import { useRef } from "react";

const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export default function ResumeDownload({ children, className }) {
  const dialogRef = useRef(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <>
      <button className={className} onClick={openDialog} type="button">{children}</button>
      <dialog aria-labelledby="resume-download-title" className="resume-download-dialog" ref={dialogRef}>
        <p className="eyebrow">Resume</p>
        <h2 id="resume-download-title">Download my resume?</h2>
        <p>Would you like to download my resume as a PDF?</p>
        <div className="resume-download-actions">
          <button onClick={closeDialog} type="button">Cancel</button>
          <a download href={assetPath("/sean-rad-alberto-resume.pdf")} onClick={closeDialog}>Download resume <span aria-hidden="true">↓</span></a>
        </div>
      </dialog>
    </>
  );
}
