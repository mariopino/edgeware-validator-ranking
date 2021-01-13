<template>
  <footer class="footer">
    <div class="container text-center text-muted">
      Made with love by
      <a href="https://polkastats.io" target="_blank">Polkastats</a> in La
      Colmena Labs ·
      <a
        href="https://github.com/mariopino/edgeware-validator-ranking/"
        aria-label="View source on GitHub"
        title="View source code on GitHub"
        target="_blank"
      >
        <i class="fab fa-github"></i>View source code on GitHub
      </a>
    </div>
  </footer>
</template>
<script>
import { config } from '@/config.js'
import commonMixin from '@/mixins/commonMixin.js'
import * as Klaro from 'klaro'
import { klaroConfig } from '@/klaro.config.js'
Klaro.setup(klaroConfig)
export default {
  mixins: [commonMixin],
  data() {
    return {
      config,
      Klaro,
    }
  },
  created() {
    const vm = this
    setInterval(function () {
      const kusamaValidatorsNetwork = JSON.parse(
        decodeURIComponent(localStorage.getItem('kusamaValidatorsNetwork'))
      )
      if (kusamaValidatorsNetwork) {
        if (kusamaValidatorsNetwork.googleAnalytics) {
          vm.$ga.enable()
        } else {
          vm.$ga.disable()
        }
      } else {
        vm.$ga.disable()
      }
    }, 10000)
  },
}
</script>
