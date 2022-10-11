const database = [
    {
        id: 0,
        nome:'Mecanica',
        setor:'Varejo',
        imagem:"https://www.gov.br/cgu/pt-br/governo-aberto/governo-aberto-e-a-ocde/imagens/engrenagem.png/view",
        data: '01/05/2022',
        descricao: 'A mecanica serve para concertar automóveis',
        produtos:[
            {
                id:'0',
                nome:'lata de tomate',
                quantidade:'30'
            }
        ]
    },
    {
        id: 1,
        nome:'Supermecado',
        setor:'Varejo',
        imagem:"../assets/shopping-cart.png",
        data: '01/05/2022',
        descricao: 'O supermercado mais completo e bla bla bla',
        produtos:[
            {
                id:'1',
                nome:'lata de tomate',
                quantidade:'30'
            }
        ]
    },
    {
        id: 2,
        nome:'Galpão Mecânica',
        setor:'Varejo-mecânica',
        imagem:"../assets/logistics.png",
        data: '01/05/2022',
        descricao: 'Galpão que guarda os itens da loja mecanica',
        produtos:[
            {
                id:'2',
                nome:'lata de tomate',
                quantidade:'30'
            }
        ]
    },
    {
        id: 3,
        nome:'Galpão Supermercado',
        setor:'Varejo-supermercado',
        imagem:"../assets/logistics.png",
        data: '01/05/2022',
        descricao: 'Galpão que guarda os itens do supermercado e bla bla bla',
        produtos:[
            {
                id:'3',
                nome:'lata de tomate',
                quantidade:'30'
            }
        ]
    } 
]

export default database;