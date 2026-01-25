import { useRoute } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Copy, Check, ExternalLink, BookOpen, Zap, Target, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getConceptById, getRelatedConcepts } from '@/lib/conceptsData';
import CodeBlock from '@/components/CodeBlock';
import { useNavigationHistory } from '@/hooks/useNavigationHistory';
import { Link } from 'wouter';

export default function ConceptDetail() {
  const [, params] = useRoute("/concept/:conceptId");
  const conceptId = params?.conceptId;
  const { goBack } = useNavigationHistory();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const concept = conceptId ? getConceptById(conceptId) : undefined;
  const relatedConcepts = conceptId ? getRelatedConcepts(conceptId) : [];

  useEffect(() => {
    console.log('ConceptDetail - conceptId:', conceptId);
    console.log('ConceptDetail - concept:', concept);
  }, [conceptId, concept]);

  if (!concept) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container max-w-4xl mx-auto p-4">
          <Button
            variant="ghost"
            onClick={goBack}
            className="mb-8 hover:bg-muted/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Card className="p-12 text-center border-2 border-dashed">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h1 className="text-3xl font-bold mb-4">Conceito não encontrado</h1>
            <p className="text-muted-foreground mb-2">
              O conceito que você está procurando não existe ou o ID '{conceptId}' é inválido.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-6">
              Verifique a URL e tente novamente.
            </p>
            <Button onClick={goBack} className="w-full">Voltar</Button>
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
    beginner: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-400',
    intermediate: 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-400',
    advanced: 'bg-rose-100 text-rose-900 dark:bg-rose-900/30 dark:text-rose-400'
  };

  const difficultyLabels = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado'
  };

  const renderMarkdown = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Títulos
      if (line.startsWith('###')) {
        return (
          <h4 key={i} className="text-lg font-semibold mt-5 mb-3 text-foreground">
            {line.replace(/^#+\s/, '')}
          </h4>
        );
      }
      if (line.startsWith('##')) {
        return (
          <h3 key={i} className="text-2xl font-bold mt-8 mb-4 text-foreground border-b pb-2">
            {line.replace(/^#+\s/, '')}
          </h3>
        );
      }
      // Listas
      if (line.startsWith('-')) {
        return (
          <li key={i} className="ml-6 mb-2 text-foreground/90">
            <span className="font-medium">{line.replace('- ', '')}</span>
          </li>
        );
      }
      // Linhas em branco
      if (!line.trim()) {
        return <div key={i} className="h-2" />;
      }
      // Parágrafos normais
      return (
        <p key={i} className="mb-4 text-foreground/80 leading-relaxed text-base">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container max-w-5xl mx-auto p-4 md:p-6">
        {/* Header com Navegação */}
        <div className="mb-8 flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={goBack}
            className="hover:bg-muted/50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Link href="/">
            <Button
              variant="ghost"
              className="hover:bg-muted/50 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>

        {/* Título e Metadados */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-3 text-foreground">
                {concept.title}
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                {concept.description}
              </p>
            </div>
            <Badge className={`${difficultyColors[concept.difficulty]} px-4 py-2 text-base font-semibold whitespace-nowrap`}>
              {difficultyLabels[concept.difficulty]}
            </Badge>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <Card className="p-8 md:p-10 mb-10 border-l-4 border-l-primary shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Conteúdo</h2>
          </div>
          <div className="prose prose-lg max-w-none dark:prose-invert text-foreground/80">
            {renderMarkdown(concept.content)}
          </div>
        </Card>

        {/* Exemplos de Código */}
        {concept.examples.length > 0 && (
          <Card className="p-8 md:p-10 mb-10 border-l-4 border-l-blue-500 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-blue-500" />
              <h2 className="text-3xl font-bold text-foreground">Exemplos de Código</h2>
            </div>
            <div className="space-y-8">
              {concept.examples.map((example, index) => (
                <div key={index} className="border rounded-xl p-6 bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{example.title}</h3>
                    <Badge variant="outline" className="text-sm font-mono">
                      {example.language}
                    </Badge>
                  </div>
                  <div className="bg-background rounded-lg p-4 mb-4 overflow-x-auto border">
                    <CodeBlock code={example.code} language={example.language} />
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {example.explanation}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Desafios */}
        {concept.challenges.length > 0 && (
          <Card className="p-8 md:p-10 mb-10 border-l-4 border-l-amber-500 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-6 h-6 text-amber-500" />
              <h2 className="text-3xl font-bold text-foreground">Desafios</h2>
            </div>
            <div className="space-y-6">
              {concept.challenges.map((challenge) => {
                const difficultyBg = {
                  easy: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800',
                  medium: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800',
                  hard: 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800'
                };
                return (
                  <div key={challenge.id} className={`border-2 rounded-xl p-6 ${difficultyBg[challenge.difficulty]}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">{challenge.title}</h3>
                      <Badge variant="outline" className="text-sm">
                        {challenge.difficulty === 'easy' ? '⭐ Fácil' : challenge.difficulty === 'medium' ? '⭐⭐ Médio' : '⭐⭐⭐ Difícil'}
                      </Badge>
                    </div>
                    <p className="text-foreground/80 mb-4 leading-relaxed">{challenge.description}</p>
                    {challenge.hints.length > 0 && (
                      <div className="bg-background/50 p-4 rounded-lg mb-4 border-l-4 border-primary">
                        <p className="font-bold text-foreground mb-3">💡 Dicas:</p>
                        <ul className="space-y-2">
                          {challenge.hints.map((hint, i) => (
                            <li key={i} className="text-foreground/80 flex items-start">
                              <span className="mr-3">→</span>
                              <span>{hint}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {challenge.expectedOutput && (
                      <div className="bg-background/50 p-4 rounded-lg border-l-4 border-green-500">
                        <p className="font-bold text-foreground mb-2">✓ Saída esperada:</p>
                        <code className="text-sm text-foreground/80 font-mono">{challenge.expectedOutput}</code>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* Recursos */}
        {concept.resources.length > 0 && (
          <Card className="p-8 md:p-10 mb-10 border-l-4 border-l-purple-500 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-foreground">📚 Recursos Recomendados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {concept.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between p-5 border rounded-xl hover:bg-muted/50 hover:border-primary transition-all group cursor-pointer"
                >
                  <div className="flex-1">
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </p>
                    <p className="text-sm text-foreground/60 capitalize mt-1">
                      {resource.type === 'documentation' ? '📖 Documentação' :
                       resource.type === 'tutorial' ? '🎓 Tutorial' :
                       resource.type === 'article' ? '📝 Artigo' : '🎥 Vídeo'}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors ml-4 flex-shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </Card>
        )}

        {/* Conceitos Relacionados */}
        {relatedConcepts.length > 0 && (
          <Card className="p-8 md:p-10 mb-10 border-l-4 border-l-cyan-500 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-foreground">🔗 Conceitos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedConcepts.map((relatedConcept) => (
                <button
                  key={relatedConcept.id}
                  onClick={() => window.location.href = `/concept/${relatedConcept.id}`}
                  className="p-6 border-2 rounded-xl hover:border-primary hover:bg-muted/50 transition-all text-left group"
                >
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {relatedConcept.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
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

        {/* Espaço ao final */}
        <div className="h-12" />
      </div>
    </div>
  );
}
