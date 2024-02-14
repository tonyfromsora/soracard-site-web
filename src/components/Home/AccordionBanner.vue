<script setup lang="ts">
const items = [{
  title: 'Self-custody',
  content: [
    'Retain full custody (possession) of your crypto assets at all times. The SORA wallet is merely an interface to manage your assets, connecting directly to the blockchain.'
  ]
}, {
  title: 'Ease of use',
  content: [
    'Access to both physical and digital cards. Use SORA Card at more than 90 million card provider merchants globally. Apple Pay and Google Pay compatibility (* will be available shortly in Phase 2 of SORA Card rollout).'
  ]
}, {
  title: 'More than spending crypto',
  content: [
    'Buy, Sell, Earn, Pay, Trade, Receive and more! All in one place, at your discretion. Thanks to the integrated ',
    {
      title: 'Polkaswap',
      href: 'https://polkaswap.io/',
    },
    ' decentralized exchange and the ',
    {
      title: 'Demeter',
      href: 'https://farming.deotoken.io/',
    },
    ' DeFi platform.'
  ]
}, {
  title: 'Privacy and Security',
  content: [
    'Access and actions regarding your crypto assets do not require any personal information like names and addresses — you just need your private key for access and full ownership.'
  ]
},]
</script>

<template>
  <section class="w container" data-aos="fade-up">
    <div class="block bg-light1 rounded">
      <div class="image">
        <img src="/home/accordion-banner.jpg" alt="SORA Wallet app with SORA Card">
      </div>
      <div class="text">
        <h2 class="mb-l">Accelerate your financial freedom today</h2>
        <Accordion :items="items" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.block {
  overflow: hidden;
}

.text {
  padding: var(--space-s);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .container {
    padding-top: var(--space-xxl);
    padding-bottom: var(--space-xxl);
  }

  .text {
    padding: var(--space-xl);
  }
}

@media (min-width: 960px) {
  .block {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>