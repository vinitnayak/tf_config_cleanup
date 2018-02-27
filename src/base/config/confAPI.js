export async function getApiUrl () {
        const response = await fetch('./tf.json');
        const json = await response.json();
        return json;
}
export default getApiUrl;