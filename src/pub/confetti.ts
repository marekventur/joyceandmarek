import { ref } from 'vue'
import JSConfetti from 'js-confetti'

const jsConfetti = ref<JSConfetti|null>(null)

export function useConfetti() {
  if (!jsConfetti.value) {
    jsConfetti.value = new JSConfetti()
  }
  const addConfetti = (opts = {}) => {
      jsConfetti.value?.addConfetti(opts)
  }

  return addConfetti;
}