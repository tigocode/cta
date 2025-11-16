import { useState } from "react";

export default function Landing() {
  const [clinic, setClinic] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [clients, setClients] = useState("");
  const [challenge, setChallenge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const numero = '5511977377688';

    const texto = `
*Novo contato recebido!* %0A%0A
*Ótica/Clínica:* ${clinic}%0A
*Responsável:* ${owner}%0A
*E-mail:* ${email}%0A
*Telefone:* ${phone}%0A
*Cidade/Estado:* ${city}%0A
*Clientes Ativos:* ${clients || "Não informado"}%0A
*Maior Desafio:* ${challenge || "Não informado"}%0A%0A
— Enviado automaticamente pelo site.
`;

    const link = `https://wa.me/${numero}?text=${texto}`;

    if (!isMobile) {
      alert(
        "Para enviar pelo WhatsApp, abra este site no seu celular.\nVocê também pode continuar pelo WhatsApp Web."
      );
    }

    window.open(link);
  };
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <span className="badge">🔔 Beta Exclusivo - Vagas Limitadas</span>
            <h1>Venda mais com os clientes que você já tem</h1>
            <p className="lead">Não deixe seu cliente escapar!</p>
            <p className="desc">
              Seu estabelecimento vende lentes, armações ou outros produtos com
              prazo de uso? Use nosso app para gerenciar clientes, enviar
              alertas automáticos de recompra e manter seu negócio ativo.
            </p>

            <ul className="icons-row">
              <li>💳 Sem cartão de crédito</li>
              <li>🧪 Teste grátis</li>
              <li>✅ Sem compromisso</li>
            </ul>

            <a type="button" href="#form" className="cta">
              Quero Começar Agora
            </a>
          </div>
        </div>
      </header>

      {/* COMO FUNCIONA */}
      <section className="how">
        <div className="container">
          <h2>Como Funciona</h2>
          <p className="sub">
            Simples, eficiente e feito para você vender mais
          </p>

          <div className="features">
            <div className="feature-card">
              <div className="ico">👥</div>
              <h3>Gerencie Todos os Clientes</h3>
              <p>
                Todos os clientes e produtos com prazos numa única tela
                organizada e intuitiva.
              </p>
            </div>

            <div className="feature-card">
              <div className="ico">🔔</div>
              <h3>Alertas Automáticos</h3>
              <p>
                Envie notificações: "Cliente João precisa de nova lente em 3
                dias".
              </p>
            </div>

            <div className="feature-card">
              <div className="ico">📈</div>
              <h3>Aumente a Recompra</h3>
              <p>
                Reduza perdas com lembretes estratégicos e campanhas de
                recompra.
              </p>
            </div>

            <div className="feature-card">
              <div className="ico">📊</div>
              <h3>Dashboard Simples</h3>
              <p>
                Sem planilhas complicadas — insights claros para seu fluxo de
                vendas.
              </p>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b"
              alt="dashboard grande"
            />
          </div>
        </div>
      </section>

      {/* POR QUE IMPORTA */}
      <section className="why">
        <div className="container">
          <h2>Por que isso importa para você</h2>

          <div className="two-cols">
            <div className="card-white">
              <h4>O Problema Real</h4>
              <p>
                Muitas óticas vendem produtos com prazo (lentes, armações) e
                depois não fazem a recompra — o cliente some.
              </p>
              <a className="accent-link" href="#">
                Nosso app evita isso.
              </a>

              <div className="stats">
                <div>
                  <strong>65%</strong>
                  <small>dos clientes não retornam sem lembrete</small>
                </div>
                <div>
                  <strong className="green">+40%</strong>
                  <small>aumento em recompras com alertas</small>
                </div>
              </div>
            </div>

            <div className="card-quote">
              <div className="stars">★★★★★</div>
              <blockquote>
                “A Ótica Visão Perfeita aumentou 35% de recompra após testar o
                app. Agora nenhum cliente é esquecido!”
              </blockquote>
              <cite>Maria Santos — Proprietária, Ótica Visão Perfeita</cite>
            </div>
          </div>

          <div className="small-image" id="form"></div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-left">
            <span className="badge small">✦ Reserve Sua Vaga Beta</span>
            <p className="muted">
              Preencha o formulário e garanta acesso prioritário
            </p>
          </div>

          <div className="cta-right">
            <form id="ctaForm" className="cta-form" onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  placeholder="Nome da Ótica/Clínica *"
                  value={clinic}
                  onChange={(e) => setClinic(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Nome do Responsável *"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  required
                />
              </div>

              <div className="row">
                <input
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Telefone *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="row">
                <input
                  type="text"
                  placeholder="Cidade/Estado *"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Quantos clientes ativos você tem?"
                  value={clients}
                  onChange={(e) => setClients(e.target.value)}
                />
              </div>

              <textarea
                placeholder="Qual o maior problema que você enfrenta hoje com recompra?"
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
              ></textarea>

              <button className="cta-primary" type="submit">
                Quero reservar agora
              </button>

              <p className="small-note">
                🔒 Sem cartão, sem compromisso. Entraremos em contato.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          <p className="sub">Tire suas dúvidas sobre o app</p>

          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-q">Preciso instalar algo?</button>
              <div className="faq-a">
                Não! Nosso app funciona direto no navegador e também tem versão
                mobile para Android e iOS.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">Quando vai estar disponível?</button>
              <div className="faq-a">
                Estamos liberando em lotes durante a fase beta — deixe seu
                contato no formulário acima.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Preciso de conhecimento técnico?
              </button>
              <div className="faq-a">
                Não. A plataforma foi pensada para ser simples e intuitiva.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Posso cancelar a qualquer momento?
              </button>
              <div className="faq-a">Sim — sem burocracia.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3 className="brand">GestorApp</h3>
            <ul>
              <li>Gestão inteligente de clientes</li>
              <li>para óticas/Clínicas Oftalmológicas.</li>
              <li>Não deixe seu cliente escapar!</li>
            </ul>
          </div>

          <div>
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="mailto:gestor@codenu.com.br">gestor@codenu.com.br</a>
              </li>
              <li>(11) 97737-7688</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          © 2025 Codenu. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}
