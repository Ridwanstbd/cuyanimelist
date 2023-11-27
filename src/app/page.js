import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json();
return (
    <div>
    <section>
      <Header title="Paling Populer" linkTitle="lihat Semua" linkHref="/populer"/>
      <AnimeList api={topAnime}/>      
    </section>
    </div>
  )
}
export default Home;