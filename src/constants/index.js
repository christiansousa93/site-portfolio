
import { a } from "maath/dist/objectSpread2-284232a6.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  cmm,
  java,
  nodejs,
  mysql,
  git,
  python,
  docker,
  caucaia,
  acs,
  wchris,
  copa,
  acai,
  c7s,
  pcar,
  sos,
  erp,
  pdvweb,
  arduino,
  software,
  robotica,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];


const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor de Softwares",
    icon: software,
  },
  {
    title: "Desenvolvedor Backend/Frontend",
    icon: backend,
  },
  {
    title: "Desenvolvedor Mobile",
    icon: mobile,
  },
  {
    title: "Robótica",
    icon: robotica,
  },
  {
    title: "Criador de Conteúdos",
    icon: creator,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "cmm",
    icon: cmm,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Desenvolvedor Full Stack",
    company_name: "WChris Tecnologia",
    icon: wchris,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Atualmente",
    points: [
      "Desenvolvedor Web.",
      "Analista de Sistemas.",
      "Desenvolvimento e implementações de sistemas.",
      "Suporte técnico",
    ],
  },
  {
    title: "Analista de Suporte - Estagiário",
    company_name: "ACS Informática",
    icon: acs,
    iconBg: "#FE3514",
    date: "Abr 2023 - Atualmente",
    points: [
      "Análise banco de dados Firebird e SQLServer.",
      "Configurações de redes e firewall.",
      "Suportes técnicos",
    ],
  },
  {
    title: "Bolsista",
    company_name: "Prefeitura de Caucaia",
    icon: caucaia,
    iconBg: "#9E0010",
    date: "Out 2022 - Mar 2023",
    points: [
      "Aluno bolsista da Prefeitura.",
      "Responsável por desenvolvimentos de projetos em Python.",
    ],
  },
  {
    title: "Assistente Administrativo",
    company_name: "Copaenergia",
    icon: copa,
    iconBg: "#233735",
    date: "Ago 2015 - Jul 2022",
    points: [
      "Processo de implementação do Sistema SAP.",
      "Multiplicador do Sistema responsável em ensinar funcionários como usar o sistema.",
      "Líder de Equipe responsável de 6 pessoas em uma unidade produtiva.",
      "Sistema finaceiro, controladoria, estoque, fiscal e compras.",
    ],
  },
  {
    title: "Gerente de Projetos",
    company_name: "Complexo PCar",
    icon: pcar,
    iconBg: "#211F20",
    date: "Jan 2021 - Mai 2022",
    points: [
      "Implementação de Sitema ERP.",
      "Sistema de comandas, estoque, cupons fiscais",
      "Abertura de MEI.",
    ],
  },
  {
    title: "Sócio/Proprietário",
    company_name: "Açaí Invokado",
    icon: acai,
    iconBg: "#82B34C",
    date: "Jul 2018 - Dez 2020",
    points: [
      "Implementação de Sistema com foco em cupom fiscal.",
      "Gerenciar funcionários e mercadorias.",
      "Desenvolvimento de sistema para controle de funcionários e compra de mercadoria.",
      "Criação de site em HTML/CSS.",
    ],
  },
  {
    title: "Assistente",
    company_name: "Educadora 7 de Setembro",
    icon: c7s,
    iconBg: "#CECECE",
    date: "Abr 2012 - Mar 2015",
    points: [
      "Apoio no setor de Tecnologia.",
      "Integração no processo de implementação do Sistema Totvs.",
    ],
  },
  {
    title: "Aluno / Monitor",
    company_name: "SOS Tecnologia e Educação",
    icon: sos,
    iconBg: "#FFFFFF",
    date: "Jan 2011 - Mai 2013",
    points: [
      "Aluno destaque no curso para ser o monitor dos professores.",
      "Ajudava outros alunos com os aprendizados de Office, Windows, Linux, Assistência Técnica e etc.",
      "Participação de vários eventos e palestras.",
    ],
  },
];

const certification = [
  {
    certification: 
      "Scrum Foundation - CertiProf.",
    image: "https://accredible_temp_credential_images.s3-external-1.amazonaws.com/16721795717413812144587380546653.png?cb=1672179574965"
  }, 
  {
    certification:
      "Remote Worker - CertiProf.",
    image: "https://accredible_temp_credential_images.s3-external-1.amazonaws.com/16828943262789277174846182806463.png?cb=1682894328881"
  },
  {
    certification:
      "Fundamentals of Informatics - IBSEC",
    image: "https://certs.ibsec.com.br/wp-content/uploads/tutor-certificates/GNE2b5spoY-234e3de39893b572.jpg"
  },
];

const projects = [
  {
    name: "Sistema ERP",
    description:
      "Sistema de gerenciamento. Nele é possível realizar controles financeiros, estoque, pdv e compras. Conexão realizada com Mysql.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyqt5",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: erp,
    source_code_link: "https://github.com/christiansousa93/erp-python",
  },
  {
    name: "PDV Web",
    description:
      "Sistema Web de um ponto de venda. Realiza cadastro e vendas de produtos com relatórios e dashboards.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "angular",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: pdvweb,
    source_code_link: "https://github.com/christiansousa93/pdvangular-app",
  },
  {
    name: "Ponto Eletrônico",
    description:
      "Ponto Eletrônico feito com placa Arduino e leitor RFID. Marca hora em tempo real, registra entrada/saída de pessoas.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "green-text-gradient",
      },
      {
        name: "automação",
        color: "pink-text-gradient",
      },
    ],
    image: arduino,
    source_code_link: "https://github.com/christiansousa93/ponto-eletronico-arduino",
  },
];

export { services, technologies, experiences, certification, projects };
