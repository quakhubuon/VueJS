<script setup>
    import { useToDoStore } from '@/store/ToDoStore';
    import { useRoute, useRouter } from 'vue-router';
    const store = useToDoStore();
    const router = useRouter();
    const route = useRoute();

    const handleDelete = () => {
        if (route.params.id) {
            store.handleDeleteUser(route.params.id);
            router.push('/')
        } else {
            console.log('error');
        }
    }
</script>

<template>
    <div class="group-card" v-if="store.detailUser">
        <div class="card-item">
            <h2>{{ store.detailUser.id }}</h2>
            <h2>{{ store.detailUser.name }}</h2>
            <h2>{{ store.detailUser.email }}</h2>
            <h2>{{ store.detailUser.phone }}</h2>
        </div>
        <div style="display: flex;">
            <div v-on:click="router.push({ path:`/create/${store.detailUser.id}` })" class="btn-main" style="margin-top: 1rem; border-radius: 50px; color: white;">Update User</div>
            <span style="padding: 0px 10px;"></span>
            <div v-on:click="handleDelete()" class="btn-main" style="margin-top: 1rem; border-radius: 50px; color: white;">Delete User</div>
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