export const paymentChartOptions = {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Payment Type',
      },
    },
  };

export const dtrChartOptions = {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Dtr Unknown and Gna',
      },
    },
  };

export const disputedChartOptions = {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Disputed and NOP',
      },
    },
  };

export const signupsChartOptions = {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sign Ups',
      },
    },
  }

export const visitsChartOptions = {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Visits Made',
      },
    },
  }

export const  redSlipsChartOptions = {
    indexAxis: 'y' as const,
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Red Slips left',
      },
    },

}

export const moneyChartOptions = {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Average dollars collected per agent ',
      },
    },
  }