export interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  category: string;
  destaque: boolean;
}

export const PRODUTOS: Produto[] = [
  {
    "id": 1,
    "title": "Jaqueta de Couro Vintage 90s",
    "description": "Jaqueta de couro legítimo marrom, clássica dos anos 90. Conservação impecável e caimento oversized perfeito.",
    "price": 389.90,
    "imageSrc": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80",
    "category": "Roupas",
    "destaque": true
  },
  {
    "id": 2,
    "title": "Câmera Analógica Canon F-1",
    "description": "Câmera SLR profissional de 1970. Totalmente revisada, funcionando perfeitamente com lente 50mm f/1.8.",
    "price": 850.00,
    "imageSrc": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=80",
    "category": "Fotografia",
    "destaque": true
  },
  {
    "id": 3,
    "title": "Vinil Pink Floyd - Dark Side",
    "description": "Prensagem original inglesa de 1973. Encarte completo com os posters e adesivos originais da época.",
    "price": 280.00,
    "imageSrc": "https://images.unsplash.com/photo-1539628390353-30b998871168?w=500&auto=format&fit=crop&q=80",
    "category": "Música",
    "destaque": true
  },
  {
    "id": 4,
    "title": "Telefone de Disco Vermelho 1980",
    "description": "Telefone clássico da Telefunken em vermelho vibrante. Adaptado para linhas modernas, com a campainha mecânica original.",
    "price": 189.00,
    "imageSrc": "https://images.unsplash.com/photo-1520923642038-b4a5910a98c9?w=500&auto=format&fit=crop&q=80",
    "category": "Decoração",
    "destaque": false
  },
  {
    "id": 5,
    "title": "Óculos Clubmaster Vintage",
    "description": "Óculos de sol estilo Clubmaster dos anos 80, armação tartaruga com detalhes dourados. Lentes com proteção UV.",
    "price": 120.00,
    "imageSrc": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=80",
    "category": "Acessórios",
    "destaque": false
  },
  {
    "id": 6,
    "title": "Máquina de Escrever Olivetti",
    "description": "Máquina de escrever portátil Lettera 32. Acompanha maleta original de transporte e fita nova bicolor.",
    "price": 490.00,
    "imageSrc": "https://images.unsplash.com/photo-1513477967668-2aaf11838bd6?w=500&auto=format&fit=crop&q=80",
    "category": "Decoração",
    "destaque": true
  },
  {
    "id": 7,
    "title": "Jeans Oversized",
    "description": "Jeans pesado estonado dos anos 80, sem elastano. Dois bolsos frontais e modelagem unissex.",
    "price": 199.90,
    "imageSrc": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80",
    "category": "Roupas",
    "destaque": false
  },
  {
    "id": 8,
    "title": "Relógio de Bolso Prateado",
    "description": "Relógio de bolso mecânico a corda com mostrador em números romanos. Funcionamento preciso e corrente inclusa.",
    "price": 310.00,
    "imageSrc": "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500&auto=format&fit=crop&q=80",
    "category": "Acessórios",
    "destaque": false
  }
];
