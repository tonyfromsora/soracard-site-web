<script setup lang="ts">
useSeoMeta({
  title: 'SORA Card | Value Freedom — Support'
})

const nav = [
  { title: "Ordering SORA Card", href: '#1' },
  { title: "Geographic availability", href: '#2' },
  { title: "Managing your account", href: '#3' },
  { title: "Account deletion", href: '#4' },
  { title: "Adding money", href: '#5' },
  { title: "Buying / selling / exchanging fiat currencies", href: '#6' },
  { title: "Buying / selling / exchanging cryptocurrencies", href: '#7' },
  { title: "Security", href: '#8' },
  { title: "Transferring crypto in /out", href: '#9' },
  { title: "Sending money to contacts", href: '#10' },
]
</script>

<template>
  <section class="container w my-3xl mx-auto" data-aos="fade-up">
    <SubNav :items="nav" />
    <div class="rich">
      <h1>Support</h1>

      <p>If you can't find an answer below please
        <a href="/contact" class="link-primary">submit a request</a>
        and our support will solve your issue as soon as possible. Alternatively, please reach out to the
        SORA community through
        <a href="/contact" class="link-primary">
          Telegram
        </a> or <a href="/contact" class="link-primary">
          Discord
        </a>.
      </p>
      <hr class="border-black-30 mb-3 mb-md-4 mb-lg-5">

      <h2 id="1">Ordering SORA Card</h2>

      <p>There are two channels to apply for SORA Card:</p>
      <ol>
        <li>On the polkaswap.io dApp</li>
        <li>Through the SORA Wallet mobile app (available on Google Play and the Apple App Store — if you just
          downloaded SORA Wallet, make sure to store your seed phrase safely)</li>
      </ol>
      <p>And the three options to apply for SORA Card, along with the fees for each option are:</p>
      <ol>
        <li>If you already have more than €100 worth of XOR in your account: the application with your SORA address is
          free</li>
        <li>If you want to purchase XOR to have the €100 balance for a free account, you can buy XOR worth up to €700
          within the app with only soft KYC required (details below)</li>
        <li>If you do not have €100 worth of XOR and you don’t want to purchase it, there will be a fee of €20 to apply
          for KYC and the SORA Card. This payment can be made with any debit/credit card (supported cards: Visa,
          Mastercard, Discover, Diners Club, JCB)</li>
      </ol>

      <h2 id="2">Geographic availability</h2>

      <p>Please refer to the <a href="/blacklist" class="link-primary">restricted countries</a> list to see if you can
        apply for SORA Card. If your country is not on the restrictions list, you may apply.</p>

      <h2 id="3">Managing your account</h2>

      <p>Details will be available soon.</p>

      <h2 id="4">Account deletion</h2>

      <p>Details will be available soon.</p>

      <h2 id="5">Adding money</h2>

      <p>Details will be available soon.</p>

      <h2 id="6">Buying / selling / exchanging fiat currencies</h2>

      <p>Details will be available soon.</p>

      <h2 id="7">Buying / selling / exchanging cryptocurrencies</h2>

      <p>Details will be available soon.</p>

      <h2 id="8">Security</h2>

      <p>Details will be available soon.</p>

      <h2 id="9">Transferring crypto in/out</h2>

      <p>Details will be available soon.</p>

      <h2 id="10">Sending money to contacts</h2>

      <p>Details will be available soon.</p>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: grid;
  gap: var(--space-s);
}

@media (min-width: 960px) {
  .container {
    grid-template-columns: 1fr 3fr;
    gap: var(--space-xxl);
    place-items: start stretch;
  }
}
</style>