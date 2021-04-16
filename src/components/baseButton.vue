<template>
    <button @click="$emit('click')" :class="bgColor" class="border border-gray-300 rounded-md px-4 py-1">
        <img :src="path" />{{btnName}}
    </button>
</template>

<script>
    export default {
        name: 'baseButton',
        props: {
            btnName: {},
            bgColor: {default: 'bg-green-100'}
        },
        emits: ['click']
    }
</script>
