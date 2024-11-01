import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function LandingPage() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const isMobile = useMediaQuery('(max-width:667px)');

  const categories = [
    { title: 'Para sua beleza e bem-estar', discount: 'Até 80% OFF', icon: 'https://www.svgrepo.com/show/4183/happy.svg' },
    { title: 'Para seu lazer', discount: 'Até 50% OFF', icon: 'https://www.svgrepo.com/show/528708/sun.svg' },
    { title: 'Para comer e beber', discount: 'Até 35% OFF', icon: 'https://www.svgrepo.com/show/470829/fork-knife.svg' },
    { title: 'Para seus estudos', discount: 'Até 80% OFF', icon: 'https://www.svgrepo.com/show/535514/mortarboard.svg' },
  ];

  const partners = [
    'https://static.nike.com.br/v11-3-0/images/brands/logo.svg', 'https://cdn.worldvectorlogo.com/logos/porsche-2.svg', 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg', 'https://cdn.worldvectorlogo.com/logos/codecademy.svg',
    'https://cdn.worldvectorlogo.com/logos/adidas-7.svg', 'https://cdn.worldvectorlogo.com/logos/martini-logo.svg', 'https://cdn.worldvectorlogo.com/logos/udemy-wordmark-1.svg', 'https://cdn.worldvectorlogo.com/logos/meta-quest-1.svg'
  ];

  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#6b7280' }}>Clube do Empresário</Typography> {/* Define cor da logo */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button href="/cases" sx={{ color: '#6b7280' }}>Cases</Button> {/* Define cor para o botão */}
              <Button href="/produtos" sx={{ color: '#6b7280' }}>Produtos</Button> {/* Define cor para o botão */}
              <Button href="/sobre-nos" sx={{ color: '#6b7280' }}>Sobre Nós</Button> {/* Define cor para o botão */}
              <Button href="/choose-login" variant="outlined" color="primary">Entrar</Button> {/* Deixa o botão Entrar no estilo padrão */}
              <Button href="/choose-register" variant="contained" color="primary">Cadastrar-se</Button> {/* Deixa o botão Cadastrar-se no estilo padrão */}
            </Box>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer} sx={{ display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

        {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>

        <Typography variant={isMobile ? "h3" : "h1"} gutterBottom fontWeight="bold">
          Experiência Exclusiva para Empresas de Sucesso
        </Typography>
        <Typography variant={isMobile ? "body1" : "subtitle1"} gutterBottom>
          Conectamos você às melhores oportunidades de mercado.
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4, gap: 2 }}>
          <Button variant="contained" color="primary" sx={{ fontSize: '0.8rem', padding: '16px 8px', minWidth: 100 }}>Saiba Mais</Button>
          <Typography variant="body1" sx={{ fontSize: '1rem', color:'#6b7280' }}>ou</Typography>
          <Button variant="outlined" color="primary" sx={{ fontSize: '0.8rem', padding: '16px 8px', minWidth: 100 }}>Falar com consultor</Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 10 }}>
          <img src="logo1.png" alt="Parceiro 1" style={{ height: 60, width: 60 }} />
          <img src="logo2.png" alt="Parceiro 2" style={{ height: 60, width: 60 }} />
          <img src="logo3.png" alt="Parceiro 3" style={{ height: 60, width: 60 }} />
          <img src="logo4.png" alt="Parceiro 4" style={{ height: 60, width: 60 }} />
        </Box>
      </Container>


      {/* Benefícios */}
      <Container maxWidth="lg" sx={{ py: 4}} >
        <Grid container spacing={4} justifyContent="center" >
          {[
            { title: 'Acesso a novos clientes', description: 'Oportunidades de negócios conectando-se com novos clientes.' },
            { title: 'Alcançar novos mercados', description: 'Penetre em novos mercados com suporte e parcerias estratégicas.' },
            { title: 'Valor agregado', description: 'Ofereça diferenciais exclusivos que aumentam o valor da sua marca.' },
            { title: 'Confiança na marca', description: 'Construa uma reputação forte e reconhecida no mercado.' },
          ].map((benefit) => (
            <Grid item xs={12} sm={6} md={3} key={benefit.title}>
              <Card sx={{ p: 1, textAlign: 'center', boxShadow: 'none', borderRadius: '25px' ,border: '1px solid #ddd', height: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>{benefit.title}</Typography>
                  <Typography variant="body1" color="textSecondary">{benefit.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Seção de clientes */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 8, backgroundColor: '#f7f7f7', borderRadius: 4 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>Mais vantagens e mais benefícios para você </Typography>
        <Box sx={{ width: 48, height: 2, backgroundColor: '#e49925', mx: 'auto', mb: 2 }} />
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>Uma variedade de opções para você economizar</Typography>

        {/* Categories */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: 'center', alignContent:'center', justifyContent: 'center', alignItems: 'center', 
                          boxShadow: 'none', border: '1px solid #ddd', p: 2, borderRadius: 3, height: '240px', display: 'flex' }}>
                <CardContent>
                  <Box component="img" src={category.icon} alt={category.title} sx={{ height: 50, mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold" color="#333">{category.title}</Typography>
                  <Box sx={{ width: 48, height: 2, backgroundColor: '#e49925', mx: 'auto', my: 1 }} />
                  <Typography variant="h5" color="primary" fontWeight="bold">{category.discount}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Partners */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, mt: 10 }}>
          {partners.map((logo, index) => (
            <Box key={index} component="img" src={logo} alt="Parceiro" sx={{ height: 40, width: 'auto', mx: 1 }} />
          ))}
        </Box>

        {/* Call to Action */}
        <Typography variant="h6" color="primary" fontWeight="bold" sx={{ mt: 8 }}>
          Você pode ser nosso parceiro também!
        </Typography>
        <Button variant="contained" color="primary" href="http://localhost:3000/register/partner" sx={{ mt: 2, borderRadius: 5, px: 8 }}>
          Ser Associado
        </Button>
      </Container>

      {/* Depoimentos */}
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>O que Nossos Clientes Dizem</Typography>
        <Typography variant="body1" color="textSecondary">
          Veja como o Clube do Empresário impactou empresas como a sua.
        </Typography>
        <Box mt={4} sx={{ p: 2, backgroundColor: '#f9f9f9', borderRadius: 2, maxWidth: '100%', position: 'relative', pt: '56.25%' }}>
        <iframe 
          src="https://www.youtube.com/embed/A6AJ7Zme2dc?controls=0" 
          title="Depoimento de Associado"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
        ></iframe>
        </Box>
      </Container>

      {/* Planos de Assinatura */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}> {/* Define a cor de fundo total */}
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>Escolha Seu Plano</Typography>
          <Grid container spacing={5} justifyContent="center" sx={{ py: 4 }}>
            {[
              { nome: 'Mensal', preco: 'R$25/mês', description: ['Networking Expandido', 'Oportunidades de Negócios', 'Suporte e Consultoria', 'Exclusividade e Visibilidade'] },
              { nome: 'Semestral', preco: 'R$125/semestral', description: ['Networking Expandido', 'Oportunidades de Negócios', 'Suporte e Consultoria', 'Exclusividade e Visibilidade'] },
              { nome: 'Anual', preco: 'R$200/anual', description: ['Networking Expandido', 'Oportunidades de Negócios', 'Suporte e Consultoria', 'Exclusividade e Visibilidade'] }
            ].map((plano) => (
              <Grid item xs={12} sm={6} md={4} key={plano.nome}>
                <Card sx={{ textAlign: 'center', p: 3, boxShadow: 'none', border: '1px solid #ddd', borderRadius: 8 }}>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">{plano.nome}</Typography>
                    <Typography variant="h6" color="primary" sx={{ my: 2 }}>{plano.preco}</Typography>
                    <Box>
                      {plano.description.map((beneficio, index) => (
                        <Typography key={index} variant="body2" color="textSecondary" sx={{ textAlign: 'left' }}>
                          - {beneficio}
                        </Typography>
                      ))}
                    </Box>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Assinar Agora</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}
      <Container maxWidth="md" sx={{ py: 4}}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>Perguntas Frequentes</Typography>
        <Box sx={{ mt: 3, borderRadius: '25px' }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="bold">Quem tem direito?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                O empresário do comércio de bens, serviços e turismo de todo o Estado de Sergipe e seus dependentes.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="bold">Por quanto tempo é válido o Cartão?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                O cartão terá a validade de 12 meses a contar da data de habilitação, após validação dos documentos pela Fecomércio-SE.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="bold">Quanto custa?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                O empresário pagará uma anuidade de R$ 199,00, e seus dependentes, uma taxa anual de R$ 19,90. A anuidade é ajustada pelo IGP-M.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="bold">Quais são as formas de pagamento?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Cartão de crédito (até 3 parcelas), débito ou boleto bancário.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="bold">Para ser associado:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Preencha o formulário clicando no botão "Solicitar Cartão".
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="bold">Para ser parceiro:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Preencha o formulário clicando no botão "Quero ser um parceiro do Club." para enviar para análise.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="bold">Sou MEI tenho direito?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Sim, o MEI (Microempreendedor Individual) tem direito ao cartão, desde que possua um CNPJ.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#1c1c1c', color: '#fff', py: 10 }}>
        <Container maxWidth="lg">
          {/* Seção CTA */}
          
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>E aí, vamos conversar?</Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 4, color: '#fff' }}>
              Está pronto para ingressar no maior clube de empresário de Sergipe e ter mais benefícios?
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="small" 
              sx={{
                padding: '6px 24px', // Ajusta o padding para reduzir o tamanho
                borderRadius: '50px', // Faz o botão arredondado
                fontSize: '0.875rem', // Ajusta o tamanho da fonte para menor
                width: 'auto', // Limita a largura para evitar o esticamento
                textTransform: 'none',
              }}>Falar com consultora</Button>
          </Box>

          {/* Segunda Seção - Informações */}
          <Grid container spacing={8} justifyContent="center">
            {/* Logo e Contato */}
            <Grid item xs={12} md={4} textAlign="center">
              <Typography variant="h5" fontWeight="bold" gutterBottom>Clube do Empresário</Typography>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={1}>
                <IconButton color="inherit" href="mailto:cartao@fecomercio-se.com.br">
                  <EmailIcon />
                </IconButton>
                <IconButton color="inherit" href="https://instagram.com" target="_blank">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="inherit" href="https://whatsapp.com" target="_blank">
                  <WhatsAppIcon />
                </IconButton>
              </Box>
              <Typography variant="body2" mt={2}>cartao@fecomercio-se.com.br</Typography>
            </Grid>

            {/* Links Rápidos */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>Acesso rápido</Typography>
              <Box sx={{ lineHeight: 2 }}>
                <Typography variant="body2"><a href="/faq" style={{ color: '#fff', textDecoration: 'none' }}>Perguntas Frequentes</a></Typography>
                <Typography variant="body2"><a href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a></Typography>
                <Typography variant="body2"><a href="/careers" style={{ color: '#fff', textDecoration: 'none' }}>Trabalhe Conosco</a></Typography>
                <Typography variant="body2"><a href="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacidade</a></Typography>
                <Typography variant="body2"><a href="/partner" style={{ color: '#fff', textDecoration: 'none' }}>Quero ser Parceiro</a></Typography>
                <Typography variant="body2"><a href="/refer" style={{ color: '#fff', textDecoration: 'none' }}>Indique sua Empresa</a></Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Endereço */}
          <Box textAlign="center" mt={8}>
            <Typography variant="body2">Av. Ivo do Prado, 564 - São José, 49015-070. Aracaju/SE</Typography>
            <Typography variant="body2">Clube do Empresário. Todos os direitos reservados.</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage;