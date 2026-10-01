import React, { useState } from 'react';
import { educationalArticles } from '../data';
import { Article } from '../types';
import { BookOpen, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const EducationalContent: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#F5F1EB] border-t border-[#182B2A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
              <span>Ensaios Clínicos</span>
              <span aria-hidden="true">/</span>
              <span>Educação em Saúde</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance">
              Informação também é cuidado.
            </h2>
          </div>

          <p className="text-sm text-[#596E6D] max-w-sm leading-relaxed">
            Compartilhamos reflexões fundamentadas na ciência médica contemporânea para que você compreenda as engrenagens da sua própria biologia.
          </p>
        </div>

        {/* Editorial Composition: 3 curated essays, non-blog card design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationalArticles.map((article, index) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-[#FAF8F5] p-6 sm:p-8 rounded-xl border border-[#182B2A]/10 shadow-[0_4px_16px_rgba(24,43,42,0.02)] hover:shadow-[0_12px_30px_rgba(24,43,42,0.06)] hover:border-[#C27854]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-[#596E6D]">
                  <span className="font-mono text-[#C27854] uppercase tracking-wider text-[11px]">
                    0{index + 1}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="shrink-0">{article.readTime}</span>
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl text-[#122826] font-normal leading-snug group-hover:text-[#1D3B39] transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#182B2A]/80 leading-relaxed font-normal">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#182B2A]/8 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#596E6D] block">
                    Autoria
                  </span>
                  <span className="text-xs font-medium text-[#122826]">
                    {article.author}
                  </span>
                </div>

                <span className="text-xs font-medium text-[#C27854] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Ler ensaio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#122826]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#FAF8F5] rounded-xl max-w-2xl w-full border border-[#C27854]/40 shadow-2xl p-6 sm:p-10 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-[#596E6D] hover:text-[#122826] p-2 rounded-full hover:bg-[#F5F1EB] transition-colors cursor-pointer"
              aria-label="Fechar ensaio"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Header */}
            <div className="mb-6 pb-6 border-b border-[#182B2A]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#596E6D]">
                <span className="text-[#C27854] font-mono uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#122826] font-normal leading-tight">
                {selectedArticle.title}
              </h3>

              <div className="text-xs text-[#596E6D]">
                Por <strong className="text-[#122826]">{selectedArticle.author}</strong> — {selectedArticle.authorRole}
              </div>
            </div>

            {/* Article Prose */}
            <div className="space-y-4 text-sm leading-relaxed text-[#182B2A]/90 font-normal">
              {selectedArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-8 p-5 rounded-lg bg-[#F5F1EB] border border-[#182B2A]/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C27854] block">
                Pontos Práticos para sua Rotina
              </span>
              <div className="space-y-2">
                {selectedArticle.keyTakeaways.map((point, kIdx) => (
                  <div key={kIdx} className="flex items-start gap-2.5 text-xs text-[#122826] leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5654] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-[#182B2A]/10 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-[#1D3B39] text-white text-xs font-medium rounded hover:bg-[#122826] transition-colors cursor-pointer"
              >
                Concluir Leitura
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
