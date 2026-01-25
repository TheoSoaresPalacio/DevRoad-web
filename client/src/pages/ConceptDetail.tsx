import { useRoute } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { getConceptById, getRelatedConcepts } from '@/lib/conceptsData';
import CodeBlock from '@/components/CodeBlock';
import { useNavigationHistory } from '@/hooks/useNavigationHistory';

export default function ConceptDetail() {
  const [, params] = useRoute("/concept/:conceptId");
  const conceptId = params?.conceptId;
  const { goBack } = useNavigationHistory();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const concept = conceptId ? getConceptById(conceptId) : undefined;
  const relatedConcepts = conceptId ? getRelatedConcepts(conceptId) : [];

  if (!concept) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={goBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Conceito não encontrado</h1>
            <p className="text-muted-foreground mb-6">
              O conceito que você está procurando não existe.
            </p>
            <Button onClick={goBack}>Voltar</Button>
          </Card>
        </div>
      </div>
    );
  }

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const difficultyLabels = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado'
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto p-4">
        {/* Header */}
        <Button
          variant="ghost"
          onClick={goBack}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        {/* Título e Metadados */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{concept.title}</h1>
              <p className="text-lg text-muted-foreground">{concept.description}</p>
            </div>
            <Badge className={difficultyColors[concept.difficulty]}>
              {difficultyLabels[concept.difficulty]}
            </Badge>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Conteúdo</h2>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {concept.content.split('\n').map((line, i) => {
              if (line.startsWith('##')) {
                return (
                  <h3 key={i} className="text-xl font-semibold mt-6 mb-3">
                    {line.replace('## ', '')}
                  </h3>
                );
              }
              if (line.startsWith('-')) {
                return (
                  <li key={i} className="ml-4">
                    {line.replace('- ', '')}
                  </li>
                );
              }
              if (line.trim()) {
                return (
                  <p key={i} className="mb-3">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </Card>

        {/* Exemplos de Código */}
        {concept.examples.length > 0 && (
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Exemplos de Código</h2>
            <div className="space-y-6">
              {concept.examples.map((example, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{example.title}</h3>
                    <Badge variant="outline">{example.language}</Badge>
                  </div>
                  <CodeBlock code={example.code} language={example.language} />
                  <p className="mt-3 text-sm text-muted-foreground">
                    {example.explanation}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Desafios */}
        {concept.challenges.length > 0 && (
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Desafios</h2>
            <div className="space-y-4">
              {concept.challenges.map((challenge) => (
                <div key={challenge.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{challenge.title}</h3>
                    <Badge variant="outline">
                      {challenge.difficulty === 'easy' ? 'Fácil' : challenge.difficulty === 'medium' ? 'Médio' : 'Difícil'}
                    </Badge>
                  </div>
                  <p className="text-sm mb-3">{challenge.description}</p>
                  {challenge.hints.length > 0 && (
                    <div className="bg-muted p-3 rounded mb-3">
                      <p className="font-semibold text-sm mb-2">Dicas:</p>
                      <ul className="text-sm space-y-1">
                        {challenge.hints.map((hint, i) => (
                          <li key={i}>• {hint}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {challenge.expectedOutput && (
                    <p className="text-sm text-muted-foreground">
                      <strong>Saída esperada:</strong> {challenge.expectedOutput}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Recursos */}
        {concept.resources.length > 0 && (
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Recursos Recomendados</h2>
            <div className="space-y-3">
              {concept.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="font-semibold">{resource.title}</p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {resource.type === 'documentation' ? 'Documentação' :
                       resource.type === 'tutorial' ? 'Tutorial' :
                       resource.type === 'article' ? 'Artigo' : 'Vídeo'}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </Card>
        )}

        {/* Conceitos Relacionados */}
        {relatedConcepts.length > 0 && (
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Conceitos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedConcepts.map((relatedConcept) => (
                <button
                  key={relatedConcept.id}
                  onClick={() => window.location.href = `/concept/${relatedConcept.id}`}
                  className="p-4 border rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <h3 className="font-semibold mb-2">{relatedConcept.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {relatedConcept.description}
                  </p>
                  <Badge className={difficultyColors[relatedConcept.difficulty]}>
                    {difficultyLabels[relatedConcept.difficulty]}
                  </Badge>
                </button>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
