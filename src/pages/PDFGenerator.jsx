import React, { useState, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Download, FileText, Edit3, Eye } from 'lucide-react';
import { mockQuotationData } from '../mock';
import PDFPreview from '../components/PDFPreview';
import { toast } from '../hooks/use-toast';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PDFGenerator = () => {
  const [jsonInput, setJsonInput] = useState(JSON.stringify(mockQuotationData, null, 2));
  const [quotationData, setQuotationData] = useState(mockQuotationData);
  const [isEditing, setIsEditing] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const previewRef = useRef(null);

  const handleLoadData = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setQuotationData(parsed);
      setIsEditing(false);
      toast({
        title: "Success",
        description: "Quotation data loaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid JSON format. Please check your input.",
        variant: "destructive",
      });
    }
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const element = previewRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`quotation-${quotationData.bookingRef || 'document'}.pdf`);
      
      toast({
        title: "Success",
        description: "PDF downloaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Travel Quotation Generator
          </h1>
          <p className="text-lg text-gray-600">Create professional, conversion-focused PDF quotations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="p-6 bg-white shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  <h2 className="text-xl font-semibold text-black">JSON Input</h2>
                </div>
                <Button
                  variant={isEditing ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                  className={isEditing ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  {isEditing ? <Eye className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
                  {isEditing ? "Preview" : "Edit"}
                </Button>
              </div>

              <Textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="font-mono text-sm h-96 resize-none border-gray-300"
                placeholder="Paste your quotation JSON data here..."
                disabled={!isEditing}
              />

              <div className="flex gap-3 mt-4">
                <Button
                  onClick={handleLoadData}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                  disabled={!isEditing}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Load & Preview
                </Button>
                <Button
                  onClick={generatePDF}
                  className="flex-1 bg-black hover:bg-gray-800 text-white"
                  disabled={isEditing || isGenerating}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isGenerating ? 'Generating...' : 'Download PDF'}
                </Button>
              </div>

              <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-orange-700">Tip:</strong> Edit the JSON to customize your quotation. 
                  Click "Load & Preview" to see changes, then "Download PDF" to generate.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-white shadow-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-black flex items-center gap-2">
                <Eye className="w-5 h-5 text-orange-600" />
                Live Preview
              </h2>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg overflow-hidden">
                <div
                  className="overflow-y-auto"
                  style={{ maxHeight: '600px' }}
                >
                  <div className="bg-white">
                    <PDFPreview previewRef={previewRef} data={quotationData} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFGenerator;