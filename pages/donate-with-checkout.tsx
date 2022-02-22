import { NextPage } from 'next'
import Layout from '../components/Layout'

import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="Buy Me Coffee | Web3 Payments">
      <div className="page-container">
        <h1>Buy Coffee</h1>
        <p>Starbucks, Costa, Dunkin Donuts 💖</p>
        <CheckoutForm />
      </div>
    </Layout>
  )
}

export default DonatePage