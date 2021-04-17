<template>
    <button @click="$emit('click')" class="border border-gray-300 rounded-md px-4 py-1">
        <img :src="path" />{{btnName}}
    </button>
</template>

<script>
    export default {
        name: 'baseButton',
        props: {
            btnName: {},
        },
        emits: ['click']
    }
</script>
