import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="vhs-text text-4xl font-bold mb-8 text-center">
          Contact
        </h1>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 bg-white/5 p-8 rounded-lg backdrop-blur-sm"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block vhs-text text-sm">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-black/50 border-2 border-beige p-3 rounded focus:border-red-500 transition-colors focus:outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block vhs-text text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-black/50 border-2 border-beige p-3 rounded focus:border-red-500 transition-colors focus:outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="block vhs-text text-sm">
              Service
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-black/50 border-2 border-beige p-3 rounded focus:border-red-500 transition-colors focus:outline-none"
              required
            >
              <option value="">Sélectionnez un service</option>
              <option value="video">Production vidéo</option>
              <option value="3d">Infographie 3D</option>
              <option value="motion">Motion design</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block vhs-text text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-black/50 border-2 border-beige p-3 rounded focus:border-red-500 transition-colors focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="vhs-button w-full"
          >
            Envoyer
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="vhs-text text-sm">
            Ou contactez-moi directement à :<br />
            <a href="mailto:contact@tmfilms.fr" className="text-red-500 hover:text-red-400">
              contact@tmfilms.fr
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
} 