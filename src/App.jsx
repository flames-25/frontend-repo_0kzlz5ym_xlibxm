import { useEffect } from 'react'
import { motion } from 'framer-motion'

function FloatingCube({ delay = 0, size = 140, color = 'from-fuchsia-500 to-indigo-500', className = '' }) {
  return (
    <motion.div
      initial={{ rotateX: 25, rotateY: -15, rotateZ: 0, y: 0, opacity: 0 }}
      animate={{ rotateX: 25, rotateY: -15, rotateZ: 360, y: [0, -20, 0], opacity: 1 }}
      transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay }}
      className={`relative ${className}`}
      style={{ perspective: 1200 }}
    >
      <div
        className={`w-[${size}px] h-[${size}px] bg-gradient-to-br ${color} rounded-[28px] shadow-2xl/30 shadow-indigo-900/20`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(55deg) rotateZ(35deg)',
          boxShadow: '0 30px 80px rgba(79, 70, 229, .18)'
        }}
      >
        {/* pseudo 3D faces */}
        <div className="absolute inset-0 rounded-[28px] bg-white/5 backdrop-blur-sm border border-white/10" />
        <div className="absolute -right-3 top-6 h-2/3 w-2 rounded-full bg-white/20 rotate-12" style={{ transform: 'translateZ(24px)' }} />
        <div className="absolute left-6 -bottom-3 h-2 w-2/3 rounded-full bg-black/10" />
      </div>
    </motion.div>
  )
}

function GlassCard({ title, subtitle, price, img, badge }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_50px_-5px_rgba(0,0,0,0.2)]"
    >
      {badge && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white/90">{badge}</span>
      )}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-white/90 font-semibold">{title}</p>
          <p className="text-white/60 text-sm">{subtitle}</p>
        </div>
        <p className="text-white/90 font-semibold">{price}</p>
      </div>
    </motion.div>
  )
}

export default function App() {
  useEffect(() => {
    // Ensure tab title in case the HTML wasn’t applied yet
    if (document.title !== 'BeYou') document.title = 'BeYou'
  }, [])

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(99,102,241,.25),transparent),radial-gradient(800px_400px_at_-10%_10%,rgba(236,72,153,.25),transparent)] bg-slate-950 text-white">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
              <span className="text-sm font-black tracking-wider">BY</span>
            </div>
            <span className="text-lg font-semibold">BeYou</span>
          </a>
          <nav className="hidden items-center gap-7 text-white/70 md:flex">
            <a className="hover:text-white transition" href="#collection">Collection</a>
            <a className="hover:text-white transition" href="#about">About</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </nav>
          <button className="rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow/50 shadow-indigo-600/10 hover:shadow-lg hover:shadow-indigo-600/20 transition">Shop now</button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        {/* 3D Background objects */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-16 top-10 hidden md:block">
            <FloatingCube delay={0} size={140} color="from-fuchsia-500 to-indigo-500" />
          </div>
          <div className="absolute right-10 top-20">
            <FloatingCube delay={4} size={180} color="from-emerald-400 to-cyan-500" />
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <FloatingCube delay={8} size={120} color="from-rose-500 to-amber-400" />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black leading-[1.1] sm:text-6xl"
            >
              Be bold. Be fluid. BeYou.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-xl text-base text-white/70 sm:text-lg"
            >
              A modern clothing label crafting timeless silhouettes with a 3D future aesthetic. Designed to move with you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#collection" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow hover:shadow-lg transition">Explore collection</a>
              <a href="#about" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur hover:bg-white/10 transition">Our story</a>
            </motion.div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-emerald-400" /> Eco-conscious</div>
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-indigo-400" /> Genderless</div>
              <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-rose-400" /> Limited drops</div>
            </div>
          </div>

          {/* 3D BY logo */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/8 to-white/0 ring-1 ring-white/10 backdrop-blur-xl" />
            <div className="absolute inset-0 grid place-items-center" style={{ perspective: 1200 }}>
              <motion.div
                initial={{ rotateX: -15, rotateY: 25, rotateZ: 0 }}
                animate={{ rotateX: -15, rotateY: 25, rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="relative h-56 w-56 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-[0_30px_120px_-20px_rgba(99,102,241,.45)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 grid place-items-center rounded-2xl bg-black/15 backdrop-blur-sm" style={{ transform: 'translateZ(32px)' }}>
                  <span className="text-6xl font-black tracking-tighter">BY</span>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/15" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="mx-auto mt-20 max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">Featured drops</h2>
          <a href="#" className="text-white/70 hover:text-white transition">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GlassCard title="Halo Puffer" subtitle="Iridescent violet" price="$240" img="https://images.unsplash.com/photo-1520975922284-7bfe3edd4b60?q=80&w=1400&auto=format&fit=crop" badge="new" />
          <GlassCard title="Flux Hoodie" subtitle="Deep charcoal" price="$120" img="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1400&auto=format&fit=crop" />
          <GlassCard title="Aero Vest" subtitle="Off‑white" price="$90" img="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop" />
        </div>
      </section>

      {/* Marquee */}
      <section className="mt-16 w-full overflow-hidden">
        <div className="animate-[marquee_30s_linear_infinite] whitespace-nowrap border-y border-white/10 py-4 text-white/60 [--gap:3rem]" style={{ maskImage: 'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)' }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="mx-[var(--gap)]">
              • Free worldwide shipping • Seamless returns • Members get 10% off • BeYou — express yourself • Limited drop •
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold sm:text-3xl">Wear what feels like you</h3>
          <p className="mt-4 text-white/70">
            Each piece is crafted with movement in mind — breathable, durable, and endlessly versatile. We prioritize recycled fabrics and small-batch production.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">Recycled</div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">Vegan</div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">Unisex</div>
          </div>
        </div>
        <div className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 ring-1 ring-white/10 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1548883354-94bcfe321361?q=80&w=1400&auto=format&fit=crop"
            alt="BeYou Campaign"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[28px] bg-white/5 p-8 ring-1 ring-white/10 md:p-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <h4 className="text-2xl font-bold">Join the BeYou circle</h4>
          <p className="mt-2 text-white/70">Get early access to drops, styling tips, and invites to IRL events.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-white/30"
            />
            <button className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-white/60 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/15">
              <span className="text-xs font-black">BY</span>
            </div>
            <span>© {new Date().getFullYear()} BeYou. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
