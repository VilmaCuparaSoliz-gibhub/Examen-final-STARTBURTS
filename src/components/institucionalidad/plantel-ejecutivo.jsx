import '../../styles/plantel-ejecutivo.css'

export default function PlantelEjecutivo() {
return (
<section className="plantel-ejecutivo">
<h1 className="titulo">Plantel Ejecutivo</h1>

<div className="organigrama">  

			<div className="nivel-1">  
				<div className="caja">  
					<span className="rol">Directorio</span>  
				</div>  
			</div>  

			<div className="linea-v"></div>  

			<div className="nivel-2">  
				<div className="caja">  
					<span className="rol">Gerente General</span>  
					<div className="foto">  
						<img src="/img/gerente.png" alt="Gerente General" />  
					</div>  
				</div>  
			</div>  

			<div className="rama">  
				<div className="linea-v"></div>  
				<div className="rama-fila">  

					<div className="columna">  
						<div className="linea-v"></div>  
						<div className="caja">  
							<span className="rol">Jefatura Médica</span>  
							<div className="foto">  
								<img src="/img/jefe_medico.png" alt="Jefatura Médica" />  
							</div>  
						</div>  
					</div>  

					<div className="columna">  
						<div className="linea-v"></div>  
						<div className="caja">  
							<span className="rol">Jefatura Recursos Humanos</span>  
							<div className="foto">  
								<img src="/img/encargada_rrhh.png" alt="Jefatura Recursos Humanos" />  
							</div>  
						</div>  
					</div>  

					<div className="columna">  
						<div className="linea-v"></div>  
						<div className="caja">  
							<span className="rol">Jefatura Servicios Generales</span>  
							<div className="foto">  
								<img src="/img/jefe_servicios_generales.png" alt="Jefatura Servicios Generales" />  
							</div>  
						</div>  
					</div>  

				</div>  
			</div>  

		</div>  
	</section>  
)

}