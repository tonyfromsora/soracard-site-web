<script setup lang="ts">
import { type QAFeedItem } from '~/lib/constants/types'

const LOCALSTORAGE_ITEM_NAME = 'mira-chat-history'
const { miraBaseUrl } = useRuntimeConfig().public

const isMiraModalOpen = useMiraModalState()

const question = ref('')
const feed = ref<QAFeedItem[]>([])

const processing = ref(false)

const handleSubmit = async () => {
  const q = question.value
  const ts = Date.now()

  question.value = ''
  processing.value = true
  feed.value.unshift({ question: q.split('\n').filter(el => el), ts })
  try {
    const result = await fetch(`${miraBaseUrl}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: q })
    })

    const { message, links } = await result.json()

    feed.value[0].answer = message?.split('\n').filter((el: string) => el) || "Something went wrong, I can't answer that."
    feed.value[0].links = links
  } catch (error) {
    console.log(error)
    feed.value[0].answer = ['Server error. Please try again later.']
  }

  try {
    localStorage.setItem(LOCALSTORAGE_ITEM_NAME, JSON.stringify(feed.value.slice(0, 30)))
  } catch (e) {
    console.log("Can't write Mira chat histroy to localStorage")
  }

  processing.value = false
}

onMounted(() => {
  try {
    const lsFeed = localStorage.getItem(LOCALSTORAGE_ITEM_NAME)
    if (lsFeed) feed.value = JSON.parse(lsFeed)
  } catch (e) {
    console.log("Can't read Mira chat histroy from localStorage")
  }
})
</script>

<template>
  <Overlay :open="isMiraModalOpen" @click="isMiraModalOpen = false" data-cursor-show data-cursor-text="Close"
    :z-index="23" :opacity=".3" />
  <section class="mira-modal text-s p-xs" :class="{ open: isMiraModalOpen }">
    <div class="feed rounded">
      <template v-for="item in feed" :key="item.ts">
        <MiraMessage from="Mira" data-aos="fade-up" data-aos-delay="300">
          <p v-for="p in item.answer">
            {{ p }}
          </p>
          <MiraAnswerControls v-if="item.answer?.length" v-bind="item" />
        </MiraMessage>
        <MiraMessage from="You" data-aos="fade-up">
          <p v-for="p in item.question">
            {{ p }}
          </p>
        </MiraMessage>
      </template>
      <MiraMessage from="Mira">
        <p>Hi there 👋</p>
        <p>I'm Mira, an experimental assistant trained on SORA data. Ask me anything, and I'll do my best. I'm in beta,
          so
          double-check if unsure.</p>
        <p>I collect anonymous logs for improvement and use the OpenAI API. Avoid sharing sensitive info.</p>
        <p>Here are some examples for you to get started with 👇</p>
      </MiraMessage>
    </div>
    <MiraTextField v-model="question" @submit="handleSubmit" :disabled="processing" placeholder="Type your question"
      button="Send" class="bg-light1 rounded px-s py-xxs" />
  </section>
</template>

<style scoped>
.mira-modal {
  position: fixed;
  bottom: 0;
  right: 50%;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 2px;
  z-index: 24;
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1) translateX(45%);
  transition: transform 1s var(--ease), opacity 1s var(--ease), visibility 1s var(--ease);
  width: 100%;
  max-width: 70rem;
  max-height: 80vh;
}

.mira-modal.open {
  opacity: var(--opacity);
  visibility: visible;
  transform: scale(1) translateX(50%);
}

.feed {
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 2px;
}
</style>