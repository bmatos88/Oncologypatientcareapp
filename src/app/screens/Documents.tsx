import { ChevronLeft, FileText, Upload, Download, Eye, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const documentCategories = [
  {
    title: 'Exames prévios',
    documents: [
      { id: 1, name: 'Hemograma completo', date: '2026-04-15', size: '2.3 MB' },
      { id: 2, name: 'Ressonância magnética', date: '2026-04-10', size: '8.5 MB' },
      { id: 3, name: 'Biópsia', date: '2026-03-25', size: '1.8 MB' },
    ]
  },
  {
    title: 'Esquemas terapêuticos prévios',
    documents: [
      { id: 4, name: 'Protocolo de quimioterapia', date: '2026-03-20', size: '1.2 MB' },
      { id: 5, name: 'Histórico de tratamento', date: '2026-03-15', size: '3.1 MB' },
    ]
  },
  {
    title: 'Relatórios médicos',
    documents: [
      { id: 6, name: 'Relatório oncológico', date: '2026-05-01', size: '2.7 MB' },
      { id: 7, name: 'Laudo patológico', date: '2026-04-20', size: '1.5 MB' },
    ]
  },
];

export function Documents() {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-20">
      <div className="bg-white p-4 border-b border-[#e8eaed] sticky top-0 z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#666e80] mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-bold uppercase">Voltar</span>
        </button>
        <h1 className="text-xl font-semibold text-[#004474]">
          Documentos
        </h1>
      </div>

      <div className="p-4 space-y-4">
        <button className="w-full bg-[#00C3C5] text-white py-4 rounded-full font-bold uppercase hover:bg-[#009fa4] transition-colors flex items-center justify-center gap-2">
          <Upload className="w-5 h-5" />
          Enviar novo documento
        </button>

        {documentCategories.map((category) => (
          <div key={category.title} className="bg-white rounded-2xl shadow-sm border border-[#e8eaed] overflow-hidden">
            <button
              onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
              className="w-full p-4 flex items-center justify-between hover:bg-[#f4f6f9] transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#ED1E79]" />
                <span className="font-bold text-[#004474]">{category.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-[#e6fbfb] text-[#00C3C5] text-xs font-bold px-2 py-1 rounded-full">
                  {category.documents.length}
                </span>
                <ChevronLeft
                  className={`w-5 h-5 text-[#666e80] transform transition-transform ${
                    expandedCategory === category.title ? '-rotate-90' : 'rotate-180'
                  }`}
                />
              </div>
            </button>

            {expandedCategory === category.title && (
              <div className="border-t border-[#e8eaed]">
                {category.documents.map((doc, idx) => (
                  <div
                    key={doc.id}
                    className={`p-4 ${idx < category.documents.length - 1 ? 'border-b border-[#e8eaed]' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-[#004474] mb-1">{doc.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-[#666e80]">
                          <span>{new Date(doc.date).toLocaleDateString('pt-BR')}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-[#e6fbfb] rounded-full transition-colors">
                          <Eye className="w-4 h-4 text-[#00C3C5]" />
                        </button>
                        <button className="p-2 hover:bg-[#e6fbfb] rounded-full transition-colors">
                          <Download className="w-4 h-4 text-[#00C3C5]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
