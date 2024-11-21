import { ref } from 'vue'

export interface PriceData {
  text: string
  note: string
}

export interface TableRow {
  product: string
  price: string | PriceData
  deposit: string
}

export const usePriceTable = () => {
  const headers = ref(['Termék', 'Ára', 'Kaució'])
  
  const rows = ref<TableRow[]>([
    {
      product: 'Csomagtartók',
      price: '1 300 Ft/nap',
      deposit: '10 000 Ft/alkalom'
    },
    {
      product: 'Tetőboxok',
      price: '1 300 Ft/nap',
      deposit: '30 000 Ft/alkalom'
    },
    {
      product: 'Csomagtartó + Box',
      price: '2 500 Ft/nap',
      deposit: '30 000 Ft/alkalom'
    },
    {
      product: 'Síléctartó',
      price: '800 Ft/nap',
      deposit: '5 000 Ft/alkalom'
    },
    {
      product: 'Kerékpártartó tetőcsomagtartóra',
      price: '800 Ft/nap',
      deposit: '5 000 Ft/alkalom'
    },
    {
      product: 'Kerékpártartó vonóhorogra',
      price: {
        text: '3 300 Ft, 3 700 Ft, 4 200 Ft/nap',
        note: '(típus és kerékpár száma függő)'
      },
      deposit: '30 000 Ft/alkalom'
    }
  ])

  return {
    headers,
    rows
  }
}
