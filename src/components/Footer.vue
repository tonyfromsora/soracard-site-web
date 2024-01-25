<template>
  <footer class="bg-light2 text-s">
    <div class="w">
      <FooterNav />
      <Socials />
      <div class="grid">
        <Apply />
        <div class="text-xs dark2">
          <p class="mb-3xs">The SORA Card website (soracard.com) and SORA mobile apps are managed by the company SORA
            Biome incorporated
            in Bulgaria with registration number 207087270, Sveta Sofia 8 Str., Floor 1, Office 101, 1000 Sofia, which is
            through their partner relationships regulated by the laws of that country. The SORA Card debit card is issued
            by Unlimit EU Ltd (registration number HE328641) pursuant to license by the Central Bank of Cyprus. Unlimit EU
            Ltd is authorized by the Central Bank of Cyprus as an Electronic Money Institution with license number
            115.1.3.7. to conduct electronic money service activities under the applicable laws and regulations of the
            Republic of Cyprus.</p>
          <p class="mb-3xs">Digital currency values are not static and fluctuate due to market changes. Not all products
            and services are
            available in all geographic areas and are subject to applicable terms and conditions. SORA may not offer
            certain products, features and/or services on the SORA mobile app in certain jurisdictions due to potential or
            actual regulatory restrictions, which can change without notice.</p>
          <p class="mb-3xs">Cardholders cannot load cryptocurrency onto their SORA Card. All cryptocurrencies will be
            converted via a
            licensed crypto exchange partner to the respective market's currency and can be loaded onto the SORA Card
            linked debit/e-money account for use in purchase and ATM withdrawals.</p>
          <p>SORA Card is an electronic money product and although we are supervised by the Central Bank of Cyprus, it is
            not covered by the Deposit Insurance System of the Republic of Cyprus. We ensure that any funds received by
            you are held in a segregated account so that in the unlikely event that Unlimit becomes insolvent your funds
            will be protected against claims made by creditors.</p>
        </div>
      </div>
      <LegalLinks />
    </div>
  </footer>
</template>

<style scoped>
.grid {
  display: grid;
  gap: var(--space-s);
  padding-top: var(--space-s);
  padding-bottom: var(--space-l);
}

@media (min-width: 960px) {
  .grid {
    padding-top: var(--space-l);
    grid-template-columns: 2fr 1fr;
  }

  .grid>*:last-child {
    order: -1;
  }
}
</style>