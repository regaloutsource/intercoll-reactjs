export const paymentChartData = {
    labels: ['PIF','Direct Debit','PDD','EDD'],
    datasets: [
      {
        label: 'Number of payments',
        data: [3,5,34,62],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 1,
      },
    ],    
}

export const dtrGnaChartData = {
    labels: ['Dtr Unknown','GNA'],
    datasets: [
        {
            label: 'Number',
            data: [142,146],
            backgroundColor: [
                'rgb(0,255,255)',
                'rgb(25,100,220)',
            ],
            borderWidth: 1
        }
    ]
}

export const disputedChartData ={
    labels: ['NOP','Disputed'],
    datasets: [
        {
            label:'Number',
            data:[33,10],
            backgroundColor: [
                'rgb(0,255,255)',
                'rgb(25,100,220)',
            ],
            borderWidth: 1
        }
    ]
}

export const signupsChartData = {
    labels: ['MU','MT','RL','RW','HT','LG','JH','AK','IL','PF','CB','LON','SM','RG','DI','JR','KK','AG','JF','GB','TR','SG','ML','TT','ANA','JC','AS','GS'],
    datasets:[
        {
            label:'# sign-ups',
            data:[1,1,1,1,1,1,1,2,2,2,2,3,3,4,4,4,5,5,7,8,11,3,4,4,4,4,6,7],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ]
}

export const visitsChartData = {
    labels:['LG','JF','HT','CB','LON','JR','MU','KT','MR','MT','JT','JH','RL','ANEWN','IL','RW','AK','TR','SM','KK','GB','DI','AG','RG','PF','SG','TT','ANA','JC','ML','AS','GS'],
    datasets:[
        {
            label:'# visits made ',
            data:[15,16,23,24,26,27,29,30,31,31,32,32,33,33,34,35,36,38,38,39,39,42,47,48,62,3,4,4,4,5,6,7],
            backgroundColor: 'rgb(255, 99, 132)',
        }
    ]
}

export const redSlipsChartData = {
    labels: [''],
    datasets:[
        {
            label:'# red slips',
            data: [186],
            backgroundColor: 'rgb(255,0,0)'
        }
    ]
}

export const moneyChartData = {
    labels: ['ANEWN','AK','MA','AA','IL','DI','TR','JH','AG','JR','KK','MR','LG','CB','PF','HT','SM','RW','LON','GB','TP','KT','RL','JT','LB','RG','MT','TT','ANA','AS','ML','JC','GS','MN','SG'],
    datasets:[
        {
            label:'Amt in dollers',
            data:[11,13,17,16,14,12,18,19,15,12,23,24,21,26,28,29,21,25,21,24,25,28,22,30,38,38,159,11,25,20,20,23,21,25,50],
            backgroundColor: 'rgb(12,220,19)'
        }
    ]
}
