<script setup>
    import { computed, ref, onMounted} from 'vue';
    import { useRouter } from 'vue-router'
    
    const todos = ref([]);
    const txtSearch = ref('');

    onMounted(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => todos.value = json)
    })

    const filterUsers = computed(() => {
        return todos.value.filter(item => item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1 || item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1)
    })

    const router = useRouter();
</script>

<template>
    <main style="padding: 2rem; color: #000;">
        <input type="input" placeholder="Enter Search Here!!!" v-model="txtSearch">
    </main>
    <div class="group-card">
        <div class="card-item" v-for="todo in filterUsers">
            <div @click="router.push({ path:`/todo/${todo?.id}` })">
                <h2>{{ todo?.name }}</h2>
                <i>{{ todo?.email }}</i>
            </div>
        </div>
    </div>
</template>

<style scoped>
    input {
        width: 100%;
        padding: .6rem 1.2rem;
        border-radius: 50px;
        border: none;
        outline: none;
        background: #ededed; 
    }

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