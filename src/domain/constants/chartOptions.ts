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


  export const mtdGnaChartOptions = {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'MTD GNA',
      },
    },
}

export const ddChartOptions = {
  maintainAspectRatio:false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: "Top DD's",
    },
  },
}

export const monthToDateChartOptions = {
  maintainAspectRatio:false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Month to Data',
    },
  },
}

export const mtdCollectedChartOptions ={
  maintainAspectRatio:false,
  indexAxis: 'y' as const,
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        // Include a dollar sign ($) in the tick labels
        callback: (value: number) => `$${value}`,
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'MTD Cash Collected',
    },
  },
}

export const monthPieChartOptions = {
  maintainAspectRatio:false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Month to Date',
    },
  },
}