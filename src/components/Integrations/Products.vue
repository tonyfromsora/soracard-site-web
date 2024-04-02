<script setup lang="ts">
const isApplyModalOpen = useApplyModalState()
</script>

<template>
  <section class="w pt-xl pb-3xl px-xs">
    <div class="item pb-3xl">
      <div class="text rich p-3xs" data-aos="fade-up">
        <span class="px-xs py-3xs bg-light1 rounded text-s">SORA Wallet</span>
        <h2 class="mt-xs">
          A unique self-custodial crypto wallet with an integrated DEX and debit card
        </h2>
        <p>
          SORA Wallet provides safe and convenient access to your SORA network assets from anywhere. You can
          effortlessly hold, send, and receive SORA tokens while on the move. Experience the power of swapping and
          pooling tokens, while simultaneously earning lucrative rewards with the innovative
          <a href="https://polkaswap.io/" target="_blank">Polkaswap</a>
          DEX and
          <a href="https://farming.deotoken.io/" target="_blank">Demeter</a>
          farming platform integration.
        </p>
        <p>
          SORA Card is an all-in-one neobank-inspired offering that boasts a European IBAN, SEPA transfers, FX
          capabilities, a debit card, and a plethora of other impressive features. With this comprehensive solution, you
          can seamlessly access all your financial needs, whether you're transferring funds across the world or
          exchanging currencies. Plus, with the powerful debit card, you can make purchases with ease, both in-store and
          online, all while enjoying competitive rates and outstanding security and privacy measures.
        </p>
        <Button title="Download SORA Wallet" @click="isApplyModalOpen = true" class="text-s mt-xs" />
      </div>
      <IntegrationsProductVisual :image="{ src: '/integrations/sora-wallet.jpg', alt: 'SORA Wallet mobile app' }"
        class="visual" data-aos="fade-up" data-aos-delay="100" />
    </div>
    <div class="item">
      <div class="text rich p-3xs" data-aos="fade-up">
        <span class="px-xs py-3xs bg-light1 rounded text-s">Polkaswap</span>
        <h2 class="mt-xs">The AMM DEX revolutionizing Polkadot's interoperable future</h2>
        <p>
          Polkaswap, built on the powerful Substrate framework, offers a superior trading platform that excels in
          quality, security, and efficiency. By leveraging its exceptional speed and advanced technical infrastructure,
          Polkaswap introduces a paradigm shift in how we trade and pool assets in a decentralized environment.
        </p>
        <p>
          At the core of Polkaswap's innovation lies its cutting-edge Aggregate Liquidity Technology (ALT). This
          groundbreaking approach guarantees users optimal liquidity with each trade, maximizing the number of output
          tokens received. Moreover, Polkaswap proudly integrates with the Polkadot ecosystem and Ethereum, and soon BNB
          Smart Chain and other EVM networks, through its reliable HASHI bridge.
        </p>
        <p>
          Polkaswap also integrates with SORA Card. With this unique interoperability, users can experience an
          unparalleled level of accessibility and convenience while enjoying the benefits of both TradFi and DeFi. Brace
          yourself for a new era of digital asset exchange as Polkaswap paves the way for the future of Polkadot's
          interoperability.
        </p>
        <Button title="Start using polkaswap.io" href="https://polkaswap.io/" target="_blank" class="text-s mt-xs" />
      </div>
      <IntegrationsProductVisual :image="{ src: '/integrations/polkaswap.jpg', alt: 'SORA Wallet mobile app' }"
        class="visual" data-aos="fade-up" data-aos-delay="100" />
    </div>
  </section>
</template>

<style scoped>
.item {
  display: grid;
  gap: var(--space-m);
}

@media (min-width: 960px) {
  .item {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .item:nth-child(odd)>.text {
    padding-right: var(--space-xxl);
  }

  .item:nth-child(even)>.text {
    padding-left: var(--space-xxl);
    order: 2;
  }

  .visual {
    align-self: center;
  }
}
</style>