#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_Color;
//varying vec2 v_TexCoord;

void main() {
//    vec2 texCoord = v_TexCoord;
	gl_FragColor = v_Color;
}