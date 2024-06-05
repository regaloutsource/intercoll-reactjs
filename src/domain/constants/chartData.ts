export const paymentChartData = {
    labels: ['PIF', 'Direct Debit', 'PDD', 'EDD'],
    datasets: [
      {
        label: 'Number of payments',
        data: [3, 5, 34, 62],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  export const paymentChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Payment Type',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Number of payments: ${context.raw}`,
        },
      },
    },
  };

  
  export const dtrGnaChartData = {
    labels: ['Dtr Unknown', 'GNA'],
    datasets: [
      {
        label: 'Number',
        data: [142, 146],
        backgroundColor: [
          'rgba(255, 0, 255, 0.7)',
          'rgba(25, 100, 220, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  export const dtrChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Dtr Unknown and Gna',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Number: ${context.raw}`,
        },
      },
    },
  };

  export const disputedChartData = {
    labels: ['NOP', 'Disputed'],
    datasets: [
      {
        label: 'Number',
        data: [33, 10],
        backgroundColor: [
          'rgba(255, 165, 0, 0.7)',
          'rgba(255, 0, 0, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  export const disputedChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Disputed and NOP',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Number: ${context.raw}`,
        },
      },
    },
  };

  export const signupsChartData = {
    labels: ['MU', 'MT', 'RL', 'RW', 'HT', 'LG', 'JH', 'AK', 'IL', 'PF', 'CB', 'LON', 'SM', 'RG', 'DI', 'JR', 'KK', 'AG', 'JF', 'GB', 'TR', 'SG', 'ML', 'TT', 'ANA', 'JC', 'AS', 'GS'],
    datasets: [
      {
        label: '# sign-ups',
        data: [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 7, 8, 11, 3, 4, 4, 4, 4, 6, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
    ],
  };
  
  export const signupsChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sign Ups',
      },
      tooltips: {
        callbacks: {
          label: (context: any) => `Number of sign-ups: ${context.parsed.y}`,
        },
      },
    },
  };

  export const visitsChartData = {
    labels: ['LG', 'JF', 'HT', 'CB', 'LON', 'JR', 'MU', 'KT', 'MR', 'MT', 'JT', 'JH', 'RL', 'ANEWN', 'IL', 'RW', 'AK', 'TR', 'SM', 'KK', 'GB', 'DI', 'AG', 'RG', 'PF', 'SG', 'TT', 'ANA', 'JC', 'ML', 'AS', 'GS'],
    datasets: [
      {
        label: '# visits made ',
        data: [15, 16, 23, 24, 26, 27, 29, 30, 31, 31, 32, 32, 33, 33, 34, 35, 36, 38, 38, 39, 39, 42, 47, 48, 62, 3, 4, 4, 4, 5, 6, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
    ],
  };
  
  export const visitsChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Visits Made',
      },
      tooltips: {
        callbacks: {
          label: (context: any) => `Number of visits: ${context.parsed.y}`,
        },
      },
    },
  };

  export const redSlipsChartData = {
    labels: [''],
    datasets: [
      {
        label: '# red slips',
        data: [186],
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
      },
    ],
  };
  
  export const redSlipsChartOptions = {
    indexAxis: 'y' as const,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Red Slips left',
      },
      tooltips: {
        callbacks: {
          label: (context: any) => `Number of red slips: ${context.parsed.y}`,
        },
      },
    },
  };

  export const moneyChartData = {
    labels: ['ANEWN', 'AK', 'MA', 'AA', 'IL', 'DI', 'TR', 'JH', 'AG', 'JR', 'KK', 'MR', 'LG', 'CB', 'PF', 'HT', 'SM', 'RW', 'LON', 'GB', 'TP', 'KT', 'RL', 'JT', 'LB', 'RG', 'MT', 'TT', 'ANA', 'JC', 'GS', 'MN', 'SG'],
    datasets: [
      {
        label: 'Amt in dollars',
        data: [11, 13, 17, 16, 14, 12, 18, 19, 15, 12, 23, 24, 21, 26, 28, 29, 21, 25, 21, 24, 25, 28, 22, 30, 38, 38, 159, 11, 25, 20, 20, 23, 21, 25, 50],
        backgroundColor: 'rgba(12, 220, 19, 0.7)',
      },
    ],
  };
  
  export const moneyChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Average dollars collected per agent',
      },
      tooltips: {
        callbacks: {
          label: (context: any) => `Amount in dollars: $${context.parsed.y}`,
        },
      },
    },
  };

  export const mtdGnaChartData = {
    labels: ['ANEWN', 'KK', 'GB', 'DI', 'KT', 'RG', 'HT', 'AG', 'JR', 'PF', 'LG', 'CB', 'LON', 'TR', 'LB', 'RL', 'JH', 'MT', 'AK', 'MR', 'JT', 'RW', 'IL', 'JF', 'SM', 'TP', 'MA', 'AA', 'WP', 'AD', 'PF', 'KK', 'MA', 'LG'],
    datasets: [
      {
        label: 'MTD GNA',
        data: [90, 52, 51, 89, 55, 151, 50, 63, 62, 168, 31, 86, 65, 35, 71, 24, 114, 65, 69, 67, 39, 40, 69, 31, 68, 79, 52, 59, 41, 21, 89, 98, 97, 94],
        fill: true,
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };
  
  export const mtdGnaChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'MTD GNA',
      },
      tooltips: {
        callbacks: {
          label: (context: any) => `MTD GNA: ${context.parsed.y}`,
        },
      },
    },
  };

  export const ddChartData = {
    labels: ['LG', 'MA', 'AUTest', 'RL', 'ANEWN', 'KK', 'KK', 'MR', 'AG', 'RW', 'JR', 'AK', 'LB', 'L', 'M', 'JT', 'JH', 'PF', 'DI', 'HT', 'TR', 'GB', 'LON'],
    datasets: [
      {
        label: "DD's",
        data: [1, 1, 1, 2, 2, 2, 3, 3, 3, 5, 10, 11, 13, 13, 13, 14, 21, 27, 32, 36, 42, 44, 49],
        backgroundColor: 'rgba(45, 67, 56, 0.7)',
      },
    ],
  };
  
  export const ddChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: "Top DD's",
      },
      tooltips: {
        callbacks: {
          label: (context: any) => `Number of DD's: ${context.parsed.y}`,
        },
      },
    },
  };
  
  export const monthToDateChartData = {
    labels: ['TR', 'JR', 'KK', 'LB', 'GB', 'AG', 'CB', 'LON', 'RW', 'HT', 'DI', 'JT', 'AK', 'PF', 'RG', 'RL', 'LG', 'MU', 'MR', 'SM', 'MT', 'IL', 'JH', 'MA'],
    datasets: [
      {
        label: 'SUPS',
        data: [51, 41, 34, 56, 55, 61, 40, 66, 33, 43, 50, 30, 42, 40, 52, 43, 28, 7, 25, 72, 26, 48, 32, 19],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        label: 'Settlements',
        data: [1, 4, 4, 5, 5, 1, 4, 6, 3, 3, 0, 0, 2, 0, 2, 3, 8, 7, 2, 2, 0, 0, 2, 1],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
    ],
  };
  
  export const monthToDateChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Month to Date',
      },
      tooltips: {
        callbacks: {
          label: (context: any) => {
            const datasetLabel = context.dataset.label || '';
            return `${datasetLabel}: ${context.parsed.y}`;
          },
        },
      },
    },
  };

  export const mtdCollectedChartData = {
    labels: ['Settlements Total', 'Sign ups Total'],
    datasets: [
      {
        data: [8013, 49778],
        backgroundColor: ['rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)'],
      },
    ],
  };
  
  export const mtdCollectedChartOptions = {
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    responsive: true,
    // scales: {
    //   linear: {
    //     options : {
    //       beginAtZero: true,
    //       ticks: {
    //         callback: (value: number) => `$${value}`,
    //       },
    //     }
    //   },
    // },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'MTD Cash Collected',
      },
      tooltips: {
        callbacks: {
          label: (context: any) => `Amount: $${context.parsed.y}`,
        },
      },
    },
  };
  
  export const monthPieChartData = {
    labels: ["DD's", 'GNA', 'RSL'],
    datasets: [
      {
        data: [8704, 600, 90],
        backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'],
      },
    ],
  };
  
  export const monthPieChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Month to Date',
      },
      tooltips: {
        callbacks: {
          label: (context: any) => {
            const datasetLabel = context.dataset.label || '';
            return `${datasetLabel}: ${context.parsed.y}`;
          },
        },
      },
    },
  };
  
  