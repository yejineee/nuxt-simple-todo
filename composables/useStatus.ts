import { computed, ref } from '@vue/composition-api'

export default function useStatus(completed:boolean) {
  const status = ref(completed);
  const statusMsg = computed(() => status.value? 'Done' : 'In Progress');
  const cardStatusClass = computed(() => ['card-status', { done: status.value }])
  const toggleStatus = () => {
    status.value = !status.value;
  };

  return {
    status,
    statusMsg,
    toggleStatus,
    cardStatusClass
  };
}
