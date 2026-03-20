import React, { useState } from 'react';
import { 
  Shield, 
  Video, 
  CreditCard, 
  Users, 
  Clock, 
  CheckCircle2, 
  Zap, 
  BarChart3, 
  Lock, 
  Globe, 
  Smartphone,
  ChevronRight,
  Settings,
  Mail,
  Copy,
  Check,
  Layout,
  Play,
  DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const App = () => {
  const [activeTab, setActiveTab] = useState('escopo');
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    documento: '',
    endereco: '',
    telefone: ''
  });
  const [copied, setCopied] = useState(false);

  const handleAccept = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Aceite de Proposta - ${formData.nome}`);
    const body = encodeURIComponent(
      `Eu, ${formData.nome}, portador do CPF/CNPJ ${formData.documento}, residente/sediado em ${formData.endereco}, telefone ${formData.telefone}, aceito a proposta para desenvolvimento da plataforma de Live Stream & Subscriptions conforme apresentado pela Blockchain Pro.\n\nAguardo os próximos passos para assinatura do contrato.`
    );
    window.location.href = `mailto:contato@blockchainpro.com.br?subject=${subject}&body=${body}`;
    setShowPayment(true);
  };

  const copyPix = () => {
    navigator.clipboard.writeText('46540059000173');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans">
      {/* Header / Hero */}
      <header className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-brand-blue flex items-center justify-center font-display font-bold text-2xl">
                  B
                </div>
                <span className="font-display text-3xl font-bold tracking-tight">
                  Blockchain <span className="text-brand-blue">PRO</span>
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Plataforma <span className="gradient-text">Live Stream</span> & Subscriptions
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Desenvolvimento de ecossistema tecnológico de alta performance para influenciadores.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 md:gap-8 h-16 overflow-x-auto no-scrollbar">
            {['escopo', 'preview', 'investimento', 'aceite'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs md:text-sm font-display uppercase tracking-widest transition-colors relative h-full flex items-center whitespace-nowrap px-2 ${
                  activeTab === tab ? 'text-brand-blue' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16">
        {activeTab === 'escopo' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-24"
          >
            {/* PARTE 1 — PACOTE INICIAL */}
            <section className="space-y-12">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
                  Parte 1: Validação do Produto
                </div>
                <h2 className="text-4xl font-display font-bold mb-6">Pacote Inicial Estratégico</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  “Versão inicial da plataforma pronta para <span className="text-white font-bold">lançamento e validação de mercado</span>.” 
                  Focada em agilidade, baixo risco e geração de receita imediata.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Admin Panel */}
                <motion.div variants={itemVariants} className="p-8 glass rounded-3xl border-white/5 hover:border-brand-blue/30 transition-all group">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                    <Settings className="text-brand-blue" size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-6">Painel Administrativo</h3>
                  <ul className="space-y-4">
                    <ScopeItem text="Gestão de Usuários e Influenciadores" />
                    <ScopeItem text="Aprovação Manual de Perfis" />
                    <ScopeItem text="Moderação de Conteúdo" />
                    <ScopeItem text="Controle Financeiro Básico" />
                    <ScopeItem text="Configuração de Taxas e Comissões" />
                    <ScopeItem text="Logs e Auditoria Simples" />
                  </ul>
                </motion.div>

                {/* Influencer Panel */}
                <motion.div variants={itemVariants} className="p-8 glass rounded-3xl border-white/5 hover:border-brand-blue/30 transition-all group">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="text-brand-blue" size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-6">Painel Influenciador</h3>
                  <ul className="space-y-4">
                    <ScopeItem text="Criação e Gestão de Perfil" />
                    <ScopeItem text="Upload de Conteúdos (Fotos/Vídeos)" />
                    <ScopeItem text="Definição de Preços (Assinatura/PPV)" />
                    <ScopeItem text="Live Streaming de Alta Performance" />
                    <ScopeItem text="Dashboard Simples de Ganhos" />
                    <ScopeItem text="Solicitação de Saque" />
                  </ul>
                </motion.div>

                {/* User Panel */}
                <motion.div variants={itemVariants} className="p-8 glass rounded-3xl border-white/5 hover:border-brand-blue/30 transition-all group">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="text-brand-blue" size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-6">Painel do Usuário</h3>
                  <ul className="space-y-4">
                    <ScopeItem text="Cadastro e Login Fluido" />
                    <ScopeItem text="Feed Dinâmico de Criadores" />
                    <ScopeItem text="Compra de Conteúdo Exclusivo (PPV)" />
                    <ScopeItem text="Assinaturas Recorrentes" />
                    <ScopeItem text="Sistema de Créditos via PIX" />
                    <ScopeItem text="Perfil e Histórico de Consumo" />
                  </ul>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BenefitCard icon={<Zap size={24} />} title="Lançamento Rápido" desc="Time-to-market otimizado para ocupação de espaço." />
                <BenefitCard icon={<Shield size={24} />} title="Validação do Modelo" desc="Teste real de tração com usuários pagantes." />
                <BenefitCard icon={<DollarSign size={24} />} title="Receita Imediata" desc="Monetização ativa desde o primeiro dia." />
              </div>
            </section>

            {/* PARTE 2 — EXPANSÃO E EVOLUÇÃO */}
            <section className="space-y-16 pt-12 border-t border-white/10">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
                  Parte 2: Expansão Estratégica
                </div>
                <h2 className="text-4xl font-display font-bold mb-6">Expansão e Evolução da Plataforma</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  A continuidade natural para transformar o produto em um <span className="text-indigo-400 font-bold">portal robusto e líder de mercado</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <h4 className="text-lg font-display font-bold flex items-center gap-2 text-indigo-400">
                    <DollarSign size={20} /> Monetização Avançada
                  </h4>
                  <div className="grid gap-4">
                    <MiniCard title="Gorjetas (Tips)" desc="Incentivos diretos durante transmissões." />
                    <MiniCard title="Mensagens Pagas" desc="Monetização de interações privadas." />
                    <MiniCard title="Lives Pagas" desc="Acesso premium a eventos exclusivos." />
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-display font-bold flex items-center gap-2 text-indigo-400">
                    <Play size={20} /> Engajamento & Social
                  </h4>
                  <div className="grid gap-4">
                    <MiniCard title="Chat Real-time" desc="Interação instantânea com moderação." />
                    <MiniCard title="Notificações Push" desc="Retenção ativa via App e Web." />
                    <MiniCard title="Gamificação" desc="Níveis, badges e ranking de usuários." />
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-display font-bold flex items-center gap-2 text-indigo-400">
                    <Zap size={20} /> Inteligência & IA
                  </h4>
                  <div className="grid gap-4">
                    <MiniCard title="Recomendação IA" desc="Algoritmo de sugestão personalizada." />
                    <MiniCard title="Feed Inteligente" desc="Ordenação por relevância e conversão." />
                    <MiniCard title="Sugestão de Preços" desc="IA para otimização de faturamento." />
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-display font-bold flex items-center gap-2 text-indigo-400">
                    <Lock size={20} /> Segurança & Compliance
                  </h4>
                  <div className="grid gap-4">
                    <MiniCard title="KYC Automatizado" desc="Verificação de identidade via IA." />
                    <MiniCard title="Watermark Dinâmica" desc="Proteção contra pirataria de conteúdo." />
                    <MiniCard title="Antifraude Avançado" desc="Monitoramento de transações em tempo real." />
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-display font-bold flex items-center gap-2 text-indigo-400">
                    <BarChart3 size={20} /> Gestão & Escala
                  </h4>
                  <div className="grid gap-4">
                    <MiniCard title="Analytics Avançado" desc="Métricas profundas de engajamento." />
                    <MiniCard title="Sistema de Afiliados" desc="Crescimento orgânico via parceiros." />
                    <MiniCard title="Infraestrutura CDN" desc="Streaming global de baixa latência." />
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-display font-bold flex items-center gap-2 text-indigo-400">
                    <Smartphone size={20} /> Experiência Premium
                  </h4>
                  <div className="grid gap-4">
                    <MiniCard title="PWA Mobile" desc="Experiência de App nativo no navegador." />
                    <MiniCard title="Evolução UX/UI" desc="Refinamento contínuo de interface." />
                    <MiniCard title="Suporte Prioritário" desc="Atendimento dedicado a criadores elite." />
                  </div>
                </div>
              </div>
            </section>

            {/* Dica Estratégica */}
            <motion.div 
              variants={itemVariants}
              className="p-8 rounded-[2rem] bg-gradient-to-r from-brand-blue/10 to-indigo-500/10 border border-white/10 text-center italic"
            >
              <p className="text-lg text-gray-300">
                “A gente já te entrega a plataforma pronta pra rodar e gerar receita. E conforme o negócio cresce, a gente evolui junto.”
              </p>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'preview' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Mockup de Interface</h2>
              <p className="text-gray-400">Design focado em conversão, inspirado nas maiores plataformas do mercado (OnlyFans / Camera Prive).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="p-6 glass rounded-2xl border-brand-blue/20">
                  <h3 className="text-xl font-display font-bold mb-2">Interface Premium</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Desenvolvemos uma interface limpa, rápida e intuitiva. O foco é o conteúdo, com botões de ação (Call to Action) estrategicamente posicionados para maximizar o faturamento por usuário.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h4 className="text-xs font-bold text-brand-blue uppercase mb-1">Mobile First</h4>
                    <p className="text-[10px] text-gray-500">Otimizado para smartphones.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h4 className="text-xs font-bold text-brand-blue uppercase mb-1">Dark Mode</h4>
                    <p className="text-[10px] text-gray-500">Visual moderno e elegante.</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-indigo-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-brand-dark rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&q=80&w=1000" 
                    alt="Platform Mockup" 
                    className="w-full h-auto opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-bold">B</div>
                      <div>
                        <h4 className="font-bold">Dashboard do Usuário</h4>
                        <p className="text-xs text-gray-400">Preview de Interface Ativa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <PreviewCard 
                step="01"
                title="Patricia Ruiva"
                desc="Conteúdo exclusivo e lives diárias."
                icon={<Users size={24} />}
                img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
              />
              <PreviewCard 
                step="02"
                title="Janaina Bombom"
                desc="A melhor experiência VIP da plataforma."
                icon={<Play size={24} />}
                img="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400"
              />
              <PreviewCard 
                step="03"
                title="Robertinha Carente"
                desc="Interação real e conteúdos inéditos."
                icon={<BarChart3 size={24} />}
                img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400"
              />
            </div>
          </motion.div>
        )}

        {activeTab === 'investimento' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold mb-4">Plano de Investimento</h2>
              <p className="text-gray-400">Estrutura financeira focada em ROI e escalabilidade.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 glass rounded-[2.5rem] border-brand-blue/30 bg-brand-blue/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl">
                  Parte 1
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Validação do Produto</h3>
                <p className="text-sm text-gray-400 mb-8">Lançamento e Geração de Receita</p>
                <div className="text-5xl font-display font-bold text-brand-blue mb-8">R$ 67.000</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-brand-blue" /> Painéis Admin, Influencer e User</li>
                  <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-brand-blue" /> Sistema de Pagamento PIX</li>
                  <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-brand-blue" /> Monetização (Assinaturas/PPV)</li>
                </ul>
              </div>

              <div className="p-8 glass rounded-[2.5rem] border-white/10 opacity-80 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">Expansão Estratégica</h3>
                  <p className="text-sm text-gray-400 mb-8">Evolução e Escala do Negócio</p>
                  <div className="text-4xl font-display font-bold text-gray-400 mb-8">Evolução Contínua</div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    A Parte 2 potencializa seus resultados com IA, gamificação e ferramentas avançadas de engajamento. O investimento será dimensionado conforme o crescimento da sua base de usuários.
                  </p>
                </div>
                <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/5 italic text-[10px] text-gray-400">
                  “A gente evolui junto com o seu sucesso.”
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 glass rounded-3xl border-brand-blue/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2">Fluxo de Investimento (Parte 1)</h3>
                  <p className="text-gray-400">Desenvolvimento Total: R$ 67.000,00</p>
                </div>
                <div className="px-6 py-3 bg-brand-blue/10 border border-brand-blue/30 rounded-full text-brand-blue font-bold">
                  Cronograma: 4 Meses
                </div>
              </div>

              <div className="space-y-6">
                <PaymentStep title="Assinatura da Proposta (Sinal)" value="R$ 5.000,00" desc="Início imediato do planejamento e UX Design." />
                <PaymentStep title="Assinatura do Contrato (Ato)" value="R$ 13.000,00" desc="Setup de infraestrutura e início do Backend." />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <PaymentStep title="30 Dias" value="R$ 12.250,00" small />
                  <PaymentStep title="60 Dias" value="R$ 12.250,00" small />
                  <PaymentStep title="90 Dias" value="R$ 12.250,00" small />
                  <PaymentStep title="120 Dias" value="R$ 12.250,00" small />
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-2xl border-white/5">
              <h4 className="font-display font-bold mb-4 flex items-center gap-2">
                <Settings size={18} className="text-brand-blue" /> Manutenção Pós-Entrega
              </h4>
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">Suporte técnico, ajustes e melhorias mensais.</p>
                <div className="text-xl font-bold text-white">R$ 3.500,00<span className="text-xs text-gray-500">/mês</span></div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'aceite' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            {!showPayment ? (
              <div className="p-8 glass rounded-3xl border-brand-blue/30">
                <h2 className="text-2xl font-display font-bold mb-8 text-center">Aceite Online</h2>
                <form onSubmit={handleAccept} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nome Completo / Razão Social</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-blue outline-none transition-colors"
                      value={formData.nome}
                      onChange={e => setFormData({...formData, nome: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">CPF / CNPJ</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-blue outline-none transition-colors"
                      value={formData.documento}
                      onChange={e => setFormData({...formData, documento: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Endereço Completo</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-blue outline-none transition-colors"
                      value={formData.endereco}
                      onChange={e => setFormData({...formData, endereco: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Telefone de Contato</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-blue outline-none transition-colors"
                      value={formData.telefone}
                      onChange={e => setFormData({...formData, telefone: e.target.value})}
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-brand-blue hover:bg-blue-700 transition-colors rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                  >
                    Aceitar Proposta <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 glass rounded-3xl border-green-500/30 text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="text-green-500" size={32} />
                </div>
                <h2 className="text-2xl font-display font-bold mb-4">Proposta Aceita!</h2>
                <p className="text-gray-400 mb-8">
                  Obrigado, {formData.nome.split(' ')[0]}! O e-mail de confirmação foi gerado. Para iniciar o projeto, realize o pagamento do sinal abaixo:
                </p>
                
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-8">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Valor do Sinal</p>
                  <p className="text-3xl font-display font-bold text-white mb-6">R$ 5.000,00</p>
                  
                  <div className="flex flex-col items-center gap-4">
                    <button 
                      onClick={copyPix}
                      className="flex items-center gap-2 text-sm text-brand-blue hover:text-blue-400 transition-colors"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? 'Copiado!' : 'Copiar Chave PIX (CNPJ)'}
                    </button>
                    <p className="text-xl font-mono text-white tracking-wider">46.540.059/0001-73</p>
                    <p className="text-xs text-gray-500">Blockchain Pro Tecnologia LTDA</p>
                  </div>
                </div>

                <button 
                  onClick={() => setShowPayment(false)}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Voltar ao formulário
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-8 h-8 border border-white flex items-center justify-center font-display font-bold text-lg">
                B
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Blockchain <span className="">PRO</span>
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Blockchain Pro - Tecnologia de Ponta para Negócios Digitais
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors group">
    <div className="mt-1">
      <div className="w-2 h-2 rounded-full bg-brand-blue group-hover:scale-150 transition-transform" />
    </div>
    <div>
      <h4 className="font-display font-bold text-lg mb-1">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const MiniCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-colors">
    <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
    <p className="text-[10px] text-gray-500">{desc}</p>
  </div>
);

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-6 glass rounded-2xl border-white/5 text-center group hover:border-brand-blue/30 transition-all">
    <div className="text-brand-blue mb-3 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="font-bold text-sm mb-1">{title}</h4>
    <p className="text-[10px] text-gray-500">{desc}</p>
  </div>
);

const ScopeItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-sm text-gray-400">
    <ChevronRight size={14} className="text-brand-blue" /> {text}
  </li>
);

const PreviewCard = ({ step, title, desc, icon, img }: { step: string, title: string, desc: string, icon: React.ReactNode, img: string }) => (
  <div className="group relative">
    <div className="absolute -top-4 -left-4 w-12 h-12 glass rounded-xl flex items-center justify-center font-display font-bold text-brand-blue z-10 border-brand-blue/30">
      {step}
    </div>
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 aspect-[3/4] mb-6">
      <img src={img} alt={title} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="text-brand-blue mb-2">{icon}</div>
        <h4 className="text-xl font-display font-bold mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  </div>
);

const PaymentStep = ({ title, value, desc, small }: { title: string, value: string, desc?: string, small?: boolean }) => (
  <div className={`flex justify-between items-center p-4 rounded-2xl border border-white/5 hover:border-brand-blue/20 transition-colors ${small ? 'bg-white/2' : 'bg-white/5'}`}>
    <div>
      <h4 className={`font-display font-bold ${small ? 'text-sm' : 'text-lg'} mb-1`}>{title}</h4>
      {desc && <p className="text-xs text-gray-500">{desc}</p>}
    </div>
    <div className={`font-display font-bold text-brand-blue ${small ? 'text-lg' : 'text-2xl'}`}>{value}</div>
  </div>
);

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default App;
