import React from "react";

const results = [
  ["EfficientSAM-S", "3612 ms", "59 ms", "60.8×", "+0.3"],
  ["MobileSAM ViT-T", "21.4 ms", "4.5 ms", "4.76×", "−0.9"],
  ["DINOv3 ViT-L", "29.8 ms", "13.1 ms", "2.30×", "−0.5"],
  ["YOLOv12-x", "115 ms", "79 ms", "1.46×", "0.0"],
];

const datasets = [
  ["COCO", "https://cocodataset.org", "Common Objects in Context: large-scale object detection, segmentation, and captioning."],
  ["ADE20K", "http://ade20k.csail.mit.edu", "Scene parsing dataset with 150 object and stuff classes."],
  ["CUB-200-2011", "http://www.vision.caltech.edu/datasets/cub_200_2011", "Fine-grained bird species categorization and segmentation."],
  ["Oxford-IIIT Pets", "https://www.robots.ox.ac.uk/~vgg/data/pets", "37 category pet dataset with pixel-level segmentation masks."],
  ["LVIS", "https://www.lvisdataset.org", "Large Vocabulary Instance Segmentation: 1000+ object categories."],
  ["Stanford Dogs", "http://vision.stanford.edu/aditya86/ImageNetDogs", "120 breeds of dogs with segmentations for fine-grained classification."],
  ["DAVIS", "https://davischallenge.org", "High-quality video object segmentation benchmark."],
  ["PASCAL VOC 2012", "http://host.robots.ox.ac.uk/pascal/VOC/voc2012", "Visual Object Classes Challenge for semantic segmentation."],
];

const phases = [
  ["A", "Teacher Prior Extraction", "Frozen teacher (ViT/CNN/YOLO) produces routing priors and feature targets for alignment."],
  ["B", "Student Dual-Head Prediction", "Lightweight CNN student predicts aligned features and a continuous spatial routing map."],
  ["C", "Block-Sparse Decoding", "Routing map is pooled into K×K macro-blocks; only salient blocks are dispatched to the decoder."],
];

const notes = [
  ["Observation", "Edge Bottleneck Inversion: after encoder slimming, the decoder becomes the dominant latency cost."],
  ["Mechanism", "Teacher attention maps are reused as a spatial compute-allocation signal for the decoder."],
  ["Constraint", "Macro-block partitioning ensures efficient memory access on commodity smartphone hardware."],
];

function SectionTag({ children }) {
  return <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neutral-500">{children}</p>;
}

function Divider() {
  return <div className="my-10 border-t border-neutral-300" />;
}

// Anonymized static mirrors serve pages in an opaque-origin sandbox where YouTube embeds render black.
// Pop-ups inherit that sandbox and YouTube's COOP blocks them, so the fallback link navigates the same tab.
const sandboxed = (() => {
  try {
    return window.location.origin === "null" || !window.localStorage;
  } catch {
    return true;
  }
})();

function Video({ id, title }) {
  if (sandboxed) {
    return (
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        rel="noreferrer"
        aria-label={`Watch ${title} on YouTube`}
        className="group absolute inset-0 flex items-center justify-center"
      >
        <img
          src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-100"
        />
        <span className="relative border border-[#f4efe2] bg-neutral-950/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f4efe2]">
          ▶ Watch on YouTube
        </span>
      </a>
    );
  }
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
      style={{ border: 0 }}
    />
  );
}

export default function NSGSResearchSite() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4efe2] text-neutral-950 selection:bg-neutral-950 selection:text-[#f4efe2]">

      {/* ── Pinned resource boxes ── */}
      <div className="mx-auto w-full max-w-6xl px-5 pt-8 md:px-8">
        <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.26em] text-neutral-400">Resources</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-neutral-950 divide-y sm:divide-y-0 sm:divide-x divide-neutral-950">

          {/* Box 1 — Presentation */}
          <div className="flex flex-col">
            <div className="border-b border-neutral-950 bg-[#e8dfca] px-4 py-3 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-600">Presentation</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">Slides</span>
            </div>
            <div className="relative bg-black min-h-[calc(100vh-120px)]">
              <Video id="frApwwEJxuM" title="NSGS Presentation" />
            </div>
          </div>

          {/* Box 2 — Demo video */}
          <div className="flex flex-col">
            <div className="border-b border-neutral-950 bg-[#e8dfca] px-4 py-3 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-600">Demo</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">Video</span>
            </div>
            <div className="relative bg-black min-h-[calc(100vh-120px)]">
              <Video id="TzsqbhIkf8Y" title="NSGS Demo" />
            </div>
          </div>

        </div>
      </div>

      <header className="mx-auto w-full max-w-6xl px-5 pt-8 md:px-8">
        <nav className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-3 border-b border-neutral-950 pb-5 md:pb-3 font-mono text-[10px] uppercase tracking-[0.18em]">
          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-12">
          </div>
          <div className="w-full flex justify-center md:justify-end flex-wrap gap-4 md:gap-6">
            <a href="#abstract" className="underline-offset-4 hover:underline">Abstract</a>
            <a href="#method" className="underline-offset-4 hover:underline">Method</a>
            <a href="#results" className="underline-offset-4 hover:underline">Results</a>
            <a href="#datasets" className="underline-offset-4 hover:underline">Datasets</a>
          </div>
        </nav>
      </header>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-18">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            <div className="mb-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
              <span className="border border-neutral-950 px-2 py-1">attention routing</span>
              <span className="border border-neutral-950 px-2 py-1">block sparse</span>
              <span className="border border-neutral-950 px-2 py-1">edge inference</span>
            </div>

            <h1 className="max-w-5xl break-words font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
              Efficient Image Segmentation on Smartphones via Attention-Guided Distillation and Block-Sparse Decoding
            </h1>

            <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug tracking-[-0.02em] text-neutral-800 md:text-3xl">
              Attention-guided distillation with block-sparse decoding for promptable foundation masks.
            </p>



            <div className="mt-10 border border-neutral-950 bg-[#e8dfca] p-3 md:p-5">
              <img src={`${import.meta.env.BASE_URL}images/modelcomparison_qualitative.png`} alt="Qualitative model comparison" className="w-full border border-neutral-950" />
              <p className="mt-4 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-neutral-600">
                Qualitative comparison showing our method preserving mask quality across YOLO, DINOv3, MobileSAM, and EfficientSAM families while drastically reducing latency.
              </p>
            </div>
          </div>

          <aside className="border border-neutral-950 bg-[#e8dfca] p-5 lg:self-start lg:mt-32">
            <p className="border-b border-neutral-950 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-600">central claim</p>
            <p className="mt-5 font-serif text-3xl leading-tight tracking-[-0.03em]">
              The bottleneck moves after encoder compression. The decoder has to be scheduled.
            </p>
            <div className="mt-6 grid grid-cols-2 border border-neutral-950 font-mono text-[10px] uppercase tracking-[0.12em]">
              {[
                ["6.7×", "avg speedup"],
                ["0.19", "mIoU drop"],
                ["21", "configs"],
                ["7", "families"],
              ].map(([value, label], i) => (
                <div key={label} className={`${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-neutral-950 p-3`}>
                  <p className="font-serif text-3xl normal-case tracking-[-0.03em]">{value}</p>
                  <p className="mt-1 text-[9px] text-neutral-600">{label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-neutral-950 bg-neutral-950 text-[#f4efe2]">
        <div className="mx-auto grid w-full max-w-6xl gap-px bg-[#f4efe2] md:grid-cols-3">
          {notes.map(([title, text]) => (
            <div key={title} className="bg-neutral-950 p-5 md:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">{title}</p>
              <p className="mt-3 max-w-md font-serif text-2xl leading-tight tracking-[-0.025em]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="abstract" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
          <div>
            <SectionTag>01 Abstract</SectionTag>
          </div>
          <div className="min-w-0">
            <p className="max-w-4xl font-serif text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              Foundation segmentation models are accurate, but interactive smartphone deployment requires compute to be spent selectively.
            </p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-700">
              NSGS addresses the "edge bottleneck inversion" by simultaneously compressing the encoder and decoder. We use teacher attention priors as a routing signal, allowing the block-sparse decoder scheduler to skip inactive token blocks while preserving the original segmentation interface.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col">
                <img src={`${import.meta.env.BASE_URL}images/ah2.png`} alt="Channel Variance Map" className="w-full border border-neutral-950" />
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-600">Channel Variance Map</p>
              </div>
              <div className="flex flex-col">
                <img src={`${import.meta.env.BASE_URL}images/ah3.png`} alt="Routing Priority Overlay" className="w-full border border-neutral-950" />
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-600">Routing Priority Overlay</p>
              </div>
            </div>
          </div>
        </div>
        <Divider />
      </section>

      <section id="method" className="mx-auto w-full max-w-6xl px-5 pb-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
          <div>
            <SectionTag>02 Method</SectionTag>
          </div>
          <div className="min-w-0">
            <div className="mb-10 border border-neutral-950 bg-white p-5">
              <img src={`${import.meta.env.BASE_URL}images/flowdiagfinal.png`} alt="Pipeline" className="w-full" />
              <p className="mt-4 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-neutral-600">
                Fig 1. Teacher-Student Distillation Pipeline: Phase A (Prior Extraction), Phase B (Prediction), and Phase C (Block-Sparse Decoding).
              </p>
            </div>
            <div className="grid min-w-0 gap-px border border-neutral-950 bg-neutral-950 lg:grid-cols-3">
              {phases.map(([letter, title, text]) => (
                <article key={letter} className="bg-[#f4efe2] p-6">
                  <p className="font-serif text-5xl leading-none tracking-[-0.04em]">{letter}</p>
                  <h3 className="mt-5 font-serif text-2xl leading-tight tracking-[-0.02em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <Divider />
      </section>

      <section id="results" className="mx-auto w-full max-w-6xl px-5 pb-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
          <div>
            <SectionTag>03 Results</SectionTag>
          </div>
          <div className="min-w-0">
            <div className="mb-7 grid gap-px border border-neutral-950 bg-neutral-950 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["6.7×", "mean speedup"],
                ["60.8×", "max speedup"],
                ["4.5 ms", "MobileSAM ours"],
                ["−0.19", "mean Δ mIoU"],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#f4efe2] p-5">
                  <p className="font-serif text-4xl leading-none tracking-[-0.04em]">{value}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">{label}</p>
                </div>
              ))}
            </div>

            <div className="mb-10 border border-neutral-950 bg-white p-5">
              <img src={`${import.meta.env.BASE_URL}images/fig01_perf_scatter.png`} alt="Performance" className="w-full" />
              <p className="mt-4 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-neutral-600">
                Fig 4. Latency vs. mIoU: our approach consistently pushes the Pareto front toward the bottom-left (low latency, high quality).
              </p>
            </div>

            <div className="w-full overflow-x-auto border border-neutral-950">
              <table className="w-full min-w-[640px] border-collapse bg-[#f4efe2] font-mono text-[11px]">
                <thead>
                  <tr className="border-b border-neutral-950 text-neutral-500">
                    <th className="px-4 py-3 text-left font-normal uppercase tracking-[0.16em]">model</th>
                    <th className="px-4 py-3 text-left font-normal uppercase tracking-[0.16em]">baseline (ms)</th>
                    <th className="px-4 py-3 text-left font-normal uppercase tracking-[0.16em]">ours (ms)</th>
                    <th className="px-4 py-3 text-left font-normal uppercase tracking-[0.16em]">speedup</th>
                    <th className="px-4 py-3 text-left font-normal uppercase tracking-[0.16em]">Δ mIoU</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row) => (
                    <tr key={row[0]} className="border-b border-neutral-300 last:border-b-0">
                      {row.map((cell, index) => (
                        <td key={`${row[0]}-${index}`} className={`px-4 py-4 align-top ${index === 0 ? "font-bold text-neutral-950" : "text-neutral-700"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Divider />
      </section>

      <section id="datasets" className="mx-auto w-full max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
          <div>
            <SectionTag>04 Datasets</SectionTag>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {datasets.map(([name, link, description]) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-neutral-950 bg-[#e8dfca] p-5 transition-all hover:bg-neutral-950 hover:text-[#f4efe2]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] group-hover:text-neutral-400">Dataset</p>
                <h3 className="mt-3 font-serif text-xl leading-tight tracking-[-0.02em]">{name}</h3>
                <p className="mt-4 text-xs leading-5 opacity-80">{description}</p>
                <div className="mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em]">
                  <span>Source</span>
                  <span className="h-px w-4 bg-current opacity-30"></span>
                  <span className="truncate">{new URL(link).hostname}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full bg-neutral-950 py-16 text-[#f4efe2]">
        <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">
            © 2026 · All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}