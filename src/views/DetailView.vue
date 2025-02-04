<script setup>
    import { useToDoStore } from '@/store/ToDoStore';
    const store = useToDoStore();
</script>

<template>
    <div class="group-card">
        <div class="card-item">
            <h2>{{ store.detailUser.id }}</h2>
            <h2>{{ store.detailUser.name }}</h2>
            <h2>{{ store.detailUser.email }}</h2>
            <h2>{{ store.detailUser.phone }}</h2>
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