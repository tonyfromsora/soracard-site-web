<script setup lang="ts">
const faqs = [{
  title: 'Can I get SORA Card if I live in ___________?',
  content: [
    'SORA Card is available for order to individuals worldwide, subject to the successful completion of the KYC procedure. The approval of your application depends on passing KYC, which takes into account your residency (not nationality). Please note that residents of certain countries like Russia, Iran, and DPRK are not eligible for SORA Card. For a complete list of restricted countries, please refer to ',
    {
      title: 'soracard.com/blacklist',
      href: '/blacklist'
    },
    '. For example, a Russian national residing in France can order SORA Card, whereas a Russian resident in Moscow cannot pass the KYC.'
  ]
}, {
  title: 'Which cryptocurrencies can I use with SORA Card?',
  content: [
    'Currently, SORA Card supports direct conversion between XOR and EUR. Through ',
    {
      title: 'Polkaswap.io',
      href: 'https://polkaswap.io'
    },
    ', it is easy to bridge and swap Ethereum network tokens such as ETH and DAI to top up your SORA Card with XOR or purchase these tokens with Euro. Support for other networks and their native tokens will be added in the near future.'
  ]
}, {
  title: 'How can I add funds to SORA Card?',
  content: [
    'You can top up your SORA Card using XOR ↔ EUR or SEPA (bank transfer).'
  ]
}, {
  title: 'Can I use SORA Card globally?',
  content: [
    'Absolutely! SORA Card can be used anywhere on the global card provider network.'
  ]
}, {
  title: 'How secure is SORA Card?',
  content: [
    'SORA Card prioritizes the highest level of security and data protection. Your user data and crypto assets remain inaccessible to SORA. Only the card issuer and card provider network have access to your transaction details. SORA Card utilizes self-custodial wallet technology, ensuring that you alone have access and control over your crypto assets. Our applications implement robust security measures, including two-factor authentication and biometric identification. Moreover, the decentralized nature of the SORA network means that no single entity has control over the network or your transactions.'
  ]
}, {
  title: 'What are the spending limits for SORA Card?',
  content: [
    'For detailed information on spending limits, please refer to our website at ',
    {
      title: 'soracard.com/fees/#4',
      href: '/fees/#4'
    }
  ]
}, {
  title: 'What are the usage fees associated with SORA Card?',
  content: [
    'You can find the details regarding SORA Card usage fees on our website at ',
    {
      title: 'soracard.com/fees',
      href: '/fees'
    },
    '. As an expression of gratitude to the supportive SORA community, the first 5,000 applicants will not be charged any yearly or monthly fees.'
  ]
}, {
  title: 'How can I obtain SORA Card?',
  content: [
    'To apply for SORA Card, you can visit ',
    {
      title: 'Polkaswap.io',
      href: 'https://polkaswap.io/'
    },
    ' or use ',
    {
      title: 'SORA Wallet',
      href: 'https://sora.org/wallet'
    },
    '. The application process includes completing the KYC procedure, which involves providing personal information such as a selfie, an ID document, and proof of address. Once approved, you can order your physical card and set up your digital account and card.'
  ]
}, {
  title: 'What security measures does SORA Card have in place to protect my funds and data?',
  content: [
    'SORA Card ensures the utmost security for your funds and data. User data and crypto assets are not accessible to SORA; only the card issuer and card provider network have access to transaction details. SORA Card employs self-custodial wallet technology, granting you exclusive access and control over your crypto assets. Our applications incorporate multiple security measures, including two-factor authentication, biometric identification, and transaction limits, all aimed at safeguarding your funds.'
  ]
},]
</script>

<template>
  <section class="py-xxl w px-s container">
    <h2 class="mb-xl">Frequently asked<br>questions</h2>
    <Accordion :items="faqs" />
  </section>
</template>

<style scoped>
.container {
  max-width: 90rem;
}
</style>