export function createUsername(name){
    const nameParts  = name.trim().split(' ');
    if (nameParts.length === 0) return '';
    if (nameParts.length === 1) return nameParts[0];
    return `${nameParts[0]}.${nameParts[nameParts.length - 1]}`;
}

export function transformarEspecialidades(listaProfessores) {
  return listaProfessores.map(professor => ({
    ...professor,
    especialidades: typeof professor.especialidades === 'string'
      ? professor.especialidades.split(',').map(e => e.trim())
      : []
  }));
}
