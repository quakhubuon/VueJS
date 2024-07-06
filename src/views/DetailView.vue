<script setup>
    import { useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';

    const route = useRoute();
    const user = ref(null);

    onMounted(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${ route.params.id }`)
        .then(response => response.json())
        .then(json => user.value = json)
    })

</script>

<template>
    <div class="group-card">
        <div class="card-item">
            <h2>{{ user?.name }}</h2>
            <h2>{{ user?.email }}</h2>
            <h2>{{ user?.phone }}</h2>
            <h2>{{ user?.username }}</h2>
        </div>
    </div>
</template>

<style scoped>
    .group-card {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
    }

    .card-item {
        background: #324558;
        color: #fff;
        border-radius: 10px;
        padding: .8rem 1rem;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15)
    }

    .card-item:hover {
        background: #243241;
    }
</style>