<script>
    let name = '';
    let email = '';
    let storyTitle = '';
    let content = '';

    function handleSubmit(event) {
        event.preventDefault();
        const story = {
            name,
            email,
            storyTitle,
            content
        };
        console.log('Story Submitted:', story);
        // Voeg hier je logica toe voor het opslaan/verzenden van de gegevens
    }
</script>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        background-color: #800000;
        color: white;
        padding: 20px;
        border-radius: 10px;
        font-family: Arial, sans-serif;
    }

    .form {
        width: 50%;
        padding: 2em;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input, textarea {
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
    }

    button {
        background-color: black;
        color: white;
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #444;
    }

    .image {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image img {
        max-width: 100%;
        max-height: 100%;
    }
</style>

<div class="container">
    <div class="form">
        <h2>Share your own Ilojo Bar story</h2>
        <form on:submit={handleSubmit}>
            <label for="name">Name</label>
            <input id="name" type="text" bind:value={name} required />

            <label for="email">Email</label>
            <input id="email" type="email" bind:value={email} required />

            <label for="storyTitle">Story Title</label>
            <input id="storyTitle" type="text" bind:value={storyTitle} required />

            <label for="content">Content</label>
            <textarea id="content" rows="6" bind:value={content} required></textarea>

            <button type="submit">Send Story</button>
        </form>
    </div>
    <div class="image">
        <!-- Voeg hier je afbeelding in -->
        <img src="/assets/images/Bookstand.png" alt="Story Stand Image">
    </div>
</div>