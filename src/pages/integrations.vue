<script setup lang="ts">
const title = 'SORA Card | Value Freedom — Integrations'
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
})
</script>

<template>
  <IntegrationsHero />
  <IntegrationsProducts id="more" />
  <Banner :image="{
    src: '/integrations/fearless-wallet.jpg',
    alt: ''
  }" background="#11121B" data-aos="fade-up">
    <h2 class="mb-3xs">Soon, SORA Card will also integrate with Fearless Wallet</h2>
    <div class="text-l mb-m rich">
      <ul>
        <li>Self-custodial mobile wallet and extension</li>
        <li>All of Polkadot and Ethereum in one app</li>
        <li>Polkaswap cross-chain DEX</li>
        <li>Advanced user-focused solutions</li>
      </ul>
    </div>
    <Button title="fearlesswallet.io" href="https://fearlesswallet.io" target="_blank" large light />
  </Banner>
</template>