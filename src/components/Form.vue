<template>
    <div class="Form">
        <form method="post" action="/node_form">
            <div class="Form-input">
                <label for="name">Name</label>
                <input type="text" id="name"/>
            </div>
            <div class="Form-input">
                <label for="email">Email</label>
                <input type="email" id="email"/>
            </div>
            <div class="Form-input">
                <label for="link">Github link</label>
                <input type="text" id="link"/>
            </div>
            <input type="submit"/>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'node-form',
    props: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Form {
        display: flex;
        flex-direction: column;
        &-input {
            margin: 2rem 0;

            label {
                margin-right: 1rem;
            }
        }
    }
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
