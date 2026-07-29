import React from "react";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Target,
  Eye,
  Rocket,
  TrendingUp,
  ShoppingBag,
  Search,
  Heart,
  FileText,
  Award,
  Scale,
  Zap,
  Lock,
  BookOpen,
  MapPin,
  ArrowRight,
  Landmark,
  FileCheck,
  Building,
  Briefcase,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

export default function Home() {
  const site = {
    name: "Unidad Nacional Antifraude",
    shortName: "UNA",
    phoneDisplay: "55 4411 7919",
    phoneRaw: "5544117919",
    whatsappUrl: "https://wa.me/525544117919?text=Hola,%20necesito%20asesor%C3%ADa%20para%20la%20recuperaci%C3%B3n%20de%20mis%20fondos.",
    address: "Juan Salvador Agraz 101, Contadero, Cuajimalpa de Morelos, 05348 Ciudad de México, CDMX",
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-800 selection:text-white pb-20 sm:pb-0 overflow-x-hidden">
      {/* Top Banner - Minimalist Corporate Strip */}
      <div className="bg-slate-900 text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-400">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-500" />
            <span>SISTEMA GUBERNAMENTAL DE ASISTENCIA Y AUDITORÍA FINANCIERA</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              {site.address}
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <a href={`tel:${site.phoneRaw}`} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-semibold text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              LÍNEA DIRECTA: {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Professional Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Minimalist Logo Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-900 rounded flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>

            <div>
              <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-900 uppercase leading-none">
                {site.name}
              </h1>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-widest uppercase mt-1">
                Recuperación Gubernamental e Institucional de Activos
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-900 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded text-xs sm:text-sm transition-colors uppercase tracking-wide flex items-center gap-2"
            >
              <span className="hidden sm:inline">SOLICITAR AUDITORÍA</span>
              <span className="sm:hidden">CONTACTO</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Clean, High-Contrast Corporate Grid */}
        <section className="relative bg-white pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Direct, Serious Messaging */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded mb-6">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Intervención Gubernamental y Financiera</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Restitución <br className="hidden sm:block"/>
                  <span className="text-emerald-800">Patrimonial</span> <br className="hidden sm:block"/>
                  Frente a Fraudes.
                </h2>

                <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                  En la <strong>{site.name}</strong>, canalizamos la investigación técnica, el peritaje de evidencias y las gestiones formales ante instituciones bancarias y autoridades reguladoras para la restitución justa de capitales defraudados.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base px-8 py-4 rounded transition-colors uppercase tracking-wide flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span>EVALUACIÓN INICIAL</span>
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a
                    href="#metodologia"
                    className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 font-bold text-sm sm:text-base px-8 py-4 rounded transition-colors uppercase tracking-wide flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span>CONOCER EL PROCESO</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Institutional Infobox */}
              <div className="lg:justify-self-end w-full max-w-md">
                <div className="bg-slate-900 rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                  {/* Subtle geometric background pattern */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 border-[40px] border-emerald-900/30 rounded-full opacity-50 pointer-events-none"></div>
                  
                  <h3 className="text-white text-lg font-bold uppercase tracking-wide mb-6 flex items-center gap-3 border-b border-slate-700 pb-4">
                    <Building className="w-5 h-5 text-emerald-400" />
                    Métricas de Gestión
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">Expedientes Atendidos</p>
                      <p className="text-3xl font-light text-white tracking-tight">+3,200 <span className="text-emerald-400 text-sm font-bold align-middle ml-2">CASOS</span></p>
                    </div>
                    
                    <div className="h-px w-full bg-slate-800"></div>

                    <div>
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">Fases de Protocolo</p>
                      <ul className="text-sm text-slate-300 space-y-3 mt-3">
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded bg-emerald-900/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</div>
                          <span>Peritaje de Evidencias Digitales</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded bg-emerald-900/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</div>
                          <span>Requerimiento Institucional</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded bg-emerald-900/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">3</div>
                          <span>Dictamen Final de Restitución</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Metodología y Lineamientos (Minimalist Corporate Grid) */}
        <section id="metodologia" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16">
              <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-2">MARCO DE ACTUACIÓN</h3>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Principios Institucionales
              </h4>
              <div className="w-16 h-1 bg-emerald-800 mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {/* Misión */}
              <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Target className="w-8 h-8 text-emerald-700 mb-6" />
                <h4 className="text-xl font-bold text-slate-900 mb-4">Misión</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Brindar apoyo y soluciones efectivas a víctimas de fraudes digitales, ayudándolas a recuperar su dinero y confianza mediante un servicio especializado y empático. Nos comprometemos a usar todas las herramientas legales y tecnológicas a nuestro alcance para combatir el fraude digital y defender los intereses de los ciudadanos de manera justa y profesional.
                </p>
              </div>

              {/* Visión */}
              <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Eye className="w-8 h-8 text-emerald-700 mb-6" />
                <h4 className="text-xl font-bold text-slate-900 mb-4">Visión</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ser líderes en la recuperación de fondos de fraudes digitales a nivel internacional, reconocidos por nuestro enfoque ético, nuestra efectividad y nuestro compromiso con la transparencia. Aspiramos a crear un entorno digital más seguro y confiable, donde las personas puedan proteger su patrimonio y sus derechos frente a amenazas de fraude.
                </p>
              </div>

              {/* Objetivo */}
              <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Rocket className="w-8 h-8 text-emerald-700 mb-6" />
                <h4 className="text-xl font-bold text-slate-900 mb-4">Objetivo</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Proporcionar un proceso de recuperación de dinero eficiente y accesible, con una tasa de éxito que permita a las víctimas de fraudes digitales recibir un apoyo integral. Queremos educar, informar y asistir a los ciudadanos, mientras fortalecemos sus capacidades para prevenir futuros incidentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Áreas de Especialidad (Casos de Éxito) */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16">
              <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-2">ÁREAS DE INTERVENCIÓN</h3>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dictámenes Atendidos
              </h4>
              <div className="w-16 h-1 bg-emerald-800 mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
              
              <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-slate-200 bg-white">
                <TrendingUp className="w-8 h-8 text-emerald-700 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-3">Inversiones Fraudulentas</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Logramos devolver fondos perdidos a ciudadanos afectados por esquemas de inversión falsos, plataformas fantasma y esquemas piramidales, colaborando con entidades regulatorias e instituciones bancarias.
                </p>
              </div>

              <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-slate-200 bg-white">
                <ShoppingBag className="w-8 h-8 text-emerald-700 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-3">Comercio en Línea</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Hemos ayudado a ciudadanos a recuperar dinero perdido en compras no entregadas o servicios no prestados, negociando directamente con plataformas de pago y pasarelas financieras.
                </p>
              </div>

              <div className="p-8 sm:p-10 bg-white">
                <Search className="w-8 h-8 text-emerald-700 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-3">Rastreo de Fraudes Complejos</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  En casos de suplantación de identidad y fraudes digitales sofisticados, nuestro equipo implementa estrategias de rastreo técnico y legal para recuperar fondos y prevenir nuevas pérdidas.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Valores (Clean List Style) */}
        <section className="py-16 sm:py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">COMPROMISO ÉTICO</h3>
                <h4 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                  Nuestros Valores Fundamentales
                </h4>
                <p className="text-slate-400 text-base leading-relaxed mb-8">
                  Principios rectores que garantizan la excelencia, confidencialidad y rigor en cada una de nuestras intervenciones patrimoniales.
                </p>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wide hover:text-emerald-300 transition-colors"
                >
                  Contactar Asesor <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Empatía</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Comprendemos el impacto emocional y financiero que tienen los fraudes digitales, tratando cada caso con compasión y atención individualizada.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FileText className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Transparencia</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Mantenemos a los ciudadanos informados en cada etapa del proceso, con comunicación clara y honesta sobre los avances.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Award className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Profesionalismo</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Actuamos con integridad y respeto, siguiendo estrictamente principios éticos en todas nuestras gestiones legales y financieras.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Scale className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Justicia</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Creemos en la importancia de que cada víctima reciba una reparación justa. Trabajamos con tenacidad por el mejor resultado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Innovación</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Usamos tecnologías avanzadas y ciberseguridad para mantenernos a la vanguardia en el rastreo de fraudes digitales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Lock className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Confidencialidad</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Respetamos la privacidad y seguridad de la información de los ciudadanos, protegiendo sus datos durante todo el proceso.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Corporate CTA */}
        <section className="py-20 bg-emerald-900 text-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Solicite una Revisión <br className="hidden sm:block"/> de su Expediente.
            </h3>
            <p className="text-emerald-100 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              La acción inmediata es fundamental. Contacte a nuestra unidad de atención para iniciar el protocolo de rastreo y restitución.
            </p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-emerald-950 font-bold text-sm sm:text-base px-10 py-5 rounded transition-transform hover:scale-105 uppercase tracking-wider shadow-xl"
            >
              <span>INICIAR COMUNICACIÓN</span>
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </section>

      </main>

      {/* Minimalist Corporate Footer */}
      <footer className="bg-slate-950 py-12 px-4 sm:px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white tracking-tight mb-2">
              {site.name}
            </h4>
            <p className="text-sm text-slate-400 mb-1">{site.address}</p>
            <p className="text-sm text-slate-400">
              Teléfono Oficial: <span className="text-emerald-400 font-semibold">{site.phoneDisplay}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-slate-400">
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Atención WhatsApp
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>&copy; {new Date().getFullYear()} {site.name}.</span>
          </div>

        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 sm:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-emerald-900 text-white font-bold text-sm uppercase tracking-wide rounded flex items-center justify-center gap-2"
        >
          <span>CONTACTAR ASESOR</span>
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>

      {/* Floating Desktop FAB */}
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="hidden sm:flex fixed bottom-6 right-6 z-50 bg-emerald-900 hover:bg-emerald-800 text-white p-4 rounded-full shadow-2xl border border-emerald-700 transition-transform duration-300 hover:scale-110 items-center justify-center group"
      >
        <span className="absolute -top-1 -right-1 bg-emerald-500 text-slate-950 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
          1
        </span>
        <MessageSquare className="w-7 h-7 text-white" />
      </a>

    </div>
  );
}
