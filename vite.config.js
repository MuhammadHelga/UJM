// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "https://apps-jsi.ub.ac.id",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, "/jsiapps/public/api"),
			},
			"/skripsi_kinerja_utama": {
				target: "https://apps-jsi.ub.ac.id",
				changeOrigin: true,
				secure: false,
				rewrite: (path) =>
					path.replace(
						/^\/skripsi_kinerja_utama/,
						"/jsiapps/public/api/skripsi_kinerja_utama"
					),
			},
			"/skripsi_rencana_kinerja": {
				target: "https://apps-jsi.ub.ac.id",
				changeOrigin: true,
				secure: false,
				rewrite: (path) =>
					path.replace(
						/^\/skripsi_rencana_kinerja/,
						"/jsiapps/public/api/skripsi_rencana_kinerja"
					),
			},
			"/skripsi_rencana_program": {
				target: "https://apps-jsi.ub.ac.id",
				changeOrigin: true,
				secure: false,
				rewrite: (path) =>
					path.replace(
						/^\/skripsi_rencana_program/,
						"/jsiapps/public/api/skripsi_rencana_program"
					),
			},
			"/skripsi_program_kerja": {
				target: "https://apps-jsi.ub.ac.id",
				changeOrigin: true,
				secure: false,
				rewrite: (path) =>
					path.replace(
						/^\/skripsi_program_kerja/,
						"/jsiapps/public/api/skripsi_program_kerja"
					),
			},
			"/skripsi_dashboard_status_proker_count": {
				target: "https://apps-jsi.ub.ac.id",
				changeOrigin: true,
				secure: false,
				rewrite: (path) =>
					path.replace(
						/^\/skripsi_dashboard_status_proker_count/,
						"/jsiapps/public/api/skripsi_dashboard_status_proker_count"
					),
			},
			"/rapat": {
				target: "https://apps-jsi.ub.ac.id",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => 
					path.replace(
						/^\/rapat/, 
						"/jsiapps/public/api/rapat"
					),
			},
			"/rapatpeserta": {
				target: "https://apps-jsi.ub.ac.id",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => 
					path.replace(
						/^\/rapat/, 
						"/jsiapps/public/api/rapatpeserta"
					),
			},

		},
	},
});
